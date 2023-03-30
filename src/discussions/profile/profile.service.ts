import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto, CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { JwtService } from '@nestjs/jwt';

var EthereumStrategy = require('passport-ethereum-siwe');
var SessionNonceStore = require('passport-ethereum-siwe').SessionNonceStore;
var passport = require('passport');
import { PrismaClient } from '@prisma/client';
import { verify } from 'crypto';
import { Role } from 'src/auth/role-enums/role.enum';

var store = new SessionNonceStore();

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaClient, private jwtService: JwtService, ) {}
  create(createProfileDto: CreateProfileDto) {
    const profile: any = {
      address: createProfileDto.address,
      name: createProfileDto.name,
      bio: createProfileDto.bio,
      telegram: createProfileDto.telegram,
      discord: createProfileDto.discord,
      nonce: createProfileDto.nonce,
    };
    console.log('profile', profile);
    return this.prisma.user.create({ data: profile });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

 async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    //update the fields returned
    return `This action updates a #${id} profile`;
  }

 async remove(id: number) {
    //[ADMIN ACTION]
    return await this.prisma.user.delete({ where: { id } });
    // return `This action removes a #${id} profile`;
  }

  sigVerify = async (createLoginDto: CreateLoginDto) => {
    const { signature, address, msg , nonce}: any = createLoginDto;

    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const Verifyaddress = recoverPersonalSignature({
      data: msgBufferHex,
      sig: signature,
    });
   const currentUser = await this.prisma.user.findFirst({
     where: {
       address: Verifyaddress,
     },
   });
    if (Verifyaddress !== currentUser?.address) {
      throw new UnauthorizedException('Signature verification failed');
    } 
      const payload = { address: Verifyaddress,
        role : Role.Admin };
      const token = this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      });
      console.log('token verify', token);
      return token;
    // }
  };

  async  login(createLoginDto: CreateLoginDto) {
    const { address, nonce }: any = createLoginDto;
    const currentUser = await this.prisma.user.findFirst({
      where: {
        address: address,
      },
    });

    if (currentUser) {
      const msg = `I am signing my one-time nonce: ${currentUser.nonce}`;
      return { msg: msg, nonce: currentUser.nonce, status: true };
    } 
    else {
               const payload: any = {
                 address: address,
                 nonce: nonce.toString(),
               };
         await this.prisma.user.create({
                 data: payload,
               });
      const msg = `I am signing my one-time nonce: ${nonce}`;
      return { msg: msg, status: false };
    }
   
  }
}
