import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
    var EthereumStrategy = require('passport-ethereum-siwe');
    var SessionNonceStore = require('passport-ethereum-siwe').SessionNonceStore;
    const prisma = new PrismaClient();
    var store = new SessionNonceStore();
    var passport = require('passport');


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
 use(req: Request, res: Response, next: NextFunction) {
 console.log('ygygy');

    passport.use(new EthereumStrategy({ store: store },function verify(address:any, cb:any){
        console.log('address', address);
          const user: any = prisma.user.findFirst({ where: address });

          console.log("user",user)
    }))
    passport.serializeUser(function (user, cb) {
      process.nextTick(function () {
        cb(null, { id: user.id, username: user.username, name: user.name });
      });
    });

    passport.deserializeUser(function (user, cb) {
      process.nextTick(function () {
        return cb(null, user);
      });
    });
    console.log('Request... nest');
 const a =  passport.authenticate('ethereum', {
      failureMessage: true,
      failWithError: true,
    })
    console.log("a",a)

    next();
  }
}
