// var express = require('express');
// var passport = require('passport');
// var EthereumStrategy = require('passport-ethereum-siwe');
// var SessionNonceStore = require('passport-ethereum-siwe').SessionNonceStore;
// var db = require('../db');
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// var store = new SessionNonceStore();

// var store = new SessionNonceStore();

// passport.use(
//   new EthereumStrategy({ store: store }, function verify(address, cb) {
//     // https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
//     // https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-3.md
//     prisma.user.findFirst({ where: address } ).then((res)=>{
      
//     });
//     db.get(
//       'SELECT * FROM blockchain_credentials WHERE chain = ? AND address = ?',
//       ['eip155:1', address],
//       function (err, row) {
//         if (err) {
//           return cb(err);
//         }
//         if (!row) {
//           db.run(
//             'INSERT INTO users (username) VALUES (?)',
//             [address],
//             function (err) {
//               if (err) {
//                 return cb(err);
//               }
//               var id = this.lastID;
//               db.run(
//                 'INSERT INTO blockchain_credentials (user_id, chain, address) VALUES (?, ?, ?)',
//                 [id, 'eip155:1', address],
//                 function (err) {
//                   if (err) {
//                     return cb(err);
//                   }
//                   var user = {
//                     id: id,
//                     username: address,
//                   };
//                   return cb(null, user);
//                 },
//               );
//             },
//           );
//         } else {
//           db.get(
//             'SELECT rowid AS id, * FROM users WHERE rowid = ?',
//             [row.user_id],
//             function (err, row) {
//               if (err) {
//                 return cb(err);
//               }
//               if (!row) {
//                 return cb(null, false);
//               }
//               return cb(null, row);
//             },
//           );
//         }
//       },
//     );
//   }),
// );

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

// var router = express.Router();

// router.get('/login', function (req, res, next) {
//   res.render('login');
// });

// router.post(
//   '/login/ethereum',
//   passport.authenticate('ethereum', {
//     failureMessage: true,
//     failWithError: true,
//   }),
//   function (req, res, next) {
//     res.json({ ok: true, location: '/' });
//   },
//   function (err, req, res, next) {
//     var cxx = Math.floor(err.status / 100);
//     if (cxx != 4) {
//       return next(err);
//     }
//     res.json({ ok: false, location: '/login' });
//   },
// );

// router.post('/login/ethereum/challenge', function (req, res, next) {
//   store.challenge(req, function (err, nonce) {
//     if (err) {
//       return next(err);
//     }
//     res.json({ nonce: nonce });
//   });
// });

// router.post('/logout', function (req, res, next) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });
// });

// module.exports = router;

var EthereumStrategy = require('passport-ethereum-siwe');
var SessionNonceStore = require('passport-ethereum-siwe').SessionNonceStore;
import passport from 'passport';
import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
var store = new SessionNonceStore();

// export EthereumSWISEStrategy
passport.use(
  new EthereumStrategy({ store: store }, function verify(address:any, done:any) {
        // Log "first"
    console.log('first');
    // Destructure the "sig" and "address" properties from the "createLoginDto" object
    // const { sig, address }: any = createLoginDto;
    try {
      // Log the "address" variable
      console.log('address', address);
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
  //  const user:any = prisma.user.findFirst({where : address})
      // function (err, row) {
      //   if (!user) {
      //     console.log("err1", user)
      //     return cb(user);
      //   }
      //   if (!row) {
      //  prisma.user.create({data : address}),
      //       function (err) {
      //         if (err) {
      //           return cb(err);
      //         }
      //         var id = this.lastID;
      //       prisma.user.findMany(),
      //           function (err) {
      //             if (err) {
      //               return cb(err);
      //             }
      //             var user = {
      //               id: id,
      //               username: address,
      //             };
      //             return cb(null, user);
      //           },
      //         );
      //       },
      //     );
      //   } else {
      //    prisma.user.findMany(),
      //       function (err, row) {
      //         if (err) {
      //           console.log("err",err)
      //           // return cb(err);
      //         }
      //         if (!row) {
      //                console.log("null",null,"false",false)
      //           // return cb(null, false);
      //         }
      //         return console.log(null, row);
      //       },
      //     );
      //   }
      // }

  }
  ),
);

passport.use(
  new EthereumStrategy({ store: store }, async function verify(
    createLoginDto: any,
    done: any,
  ) {
    // Log "first"
    console.log('first');
    // Destructure the "sig" and "address" properties from the "createLoginDto" object
    const { sig, address }: any = createLoginDto;
    try {
      // Log the "address" variable
      console.log('address', address);
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
