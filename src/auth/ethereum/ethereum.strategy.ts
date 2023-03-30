
var EthereumStrategy = require('passport-ethereum-siwe');
var SessionNonceStore = require('passport-ethereum-siwe').SessionNonceStore;
import passport from 'passport';
import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
var store = new SessionNonceStore();

passport.use(
  new EthereumStrategy({ store: store }, function verify(address:any, done:any) {
    try {
      console.log('address', address);
      const user = this.prisma.user.findFirst({
        where: { address: address },
      });
      // If no user is found, return an error message with "done"
      if (!user) {
        return done(null, { message: 'Incorrect username' });
      }
      // If a user is found, return an error message with "done"
      if (user) {
        return done(null, false, { message: 'Incorrect password' });
      }
      // If all else succeeds, return the "user" object with "done"
      return done(null, user);
    } catch (error) {
      // If an error is caught, return the error message with "done"
      return done(error);
    }
  }
  ),
);

passport.use(
  new EthereumStrategy({ store: store }, async function verify(
    createLoginDto: any,
    done: any,
  ) {
    // Log "first"
    // Destructure the "sig" and "address" properties from the "createLoginDto" object
    const { sig, address }: any = createLoginDto;
    try {
      // Log the "address" variable
      // Use the "this.prisma.user.findFirst" method to find a user with a matching "address"
      const user = this.prisma.user.findFirst({
        where: { address: address },
      });
      // If no user is found, return an error message with "done"
      if (!user) {
        return done(null, { message: 'Incorrect username' });
      }
      // If a user is found, return an error message with "done"
      if (user) {
        return done(null, false, { message: 'Incorrect password' });
      }
      // If all else succeeds, return the "user" object with "done"
      return done(null, user);
    } catch (error) {
      // If an error is caught, return the error message with "done"
      return done(error);
    }
  }),
);

var router = express.Router();

router.post(
  '/login/ethereum',
  passport.authenticate('ethereum', {
    failureMessage: true,
    failWithError: true,
  }),
  function (req, res, next) {
    res.json({ ok: true, location: '/' });
  },
  function (err, req, res, next) {
    var cxx = Math.floor(err.status / 100);
    if (cxx != 4) {
      return next(err);
    }
    res.json({ ok: false, location: '/login' });
  },
);

router.post('/login/ethereum/challenge', function (req, res, next) {
  store.challenge(req, function (err, nonce) {
    if (err) {
      return next(err);
    }
    res.json({ nonce: nonce });
  });
});
