import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-ethereum-siwe';

// var EthereumStrategy = require('passport-ethereum-siwe');
// var SessionNonceStore = require('passport-ethereum-siwe').SessionNonceStore;
// var store = new SessionNonceStore();

@Injectable()
export class EthereumSWISEStrategy extends PassportStrategy(
  Strategy,
  'ethereum',
) {
  constructor() {
    super();
    console.log('working---', Strategy);

  }
 
  
}
