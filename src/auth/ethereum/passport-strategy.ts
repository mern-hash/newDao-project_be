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

    //     {
    // //   // SWISE configuration options
    // //   providerUrl: 'https://provider.swise.network',
    // //   audience: 'myapp',
    // //   issuer: 'myapp',
    // //   authParams: {
    // //     // Additional SWISE authentication parameters
    // // store : store
    //   },
    console.log('working---', Strategy);

  }
  //   async validate(address: string): Promise<any> {
  //     // Implement your user validation logic here
  //     // This method should return the authenticated user or throw an error if authentication fails
  //   }
  
}
