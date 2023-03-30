import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto, CreateLoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-ethereum-siwe';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { Role } from './role-enums/role.enum';
// import Web3 from 'web3';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient, private jwtService: JwtService) {
    // const web3 = new Web3();
    // super({
    //   web3,
    //   authPath: '/auth/ethereum',
    //   callbackURL: '/auth/ethereum/callback',
    // });
  }
  create(createAuthDto: CreateAuthDto) {
    const auth: any = {
      id: createAuthDto.id,
      content: createAuthDto.content,
      createdAt: createAuthDto.createdAt,
      authorId: createAuthDto.authorId,
      // author: createAuthDto. author,
      commentId: createAuthDto.commentId,
      canvasAction: createAuthDto.canvasAction,
      canvasSession: createAuthDto.canvasSession,
      canvasHash: createAuthDto.canvasHash,
    };
    // 'This action adds a new auth';
    return this.prisma.reply.create({ data: auth });
  }

 async findAll() {
    // return `This action returns all auth`;
    return await this.prisma.reply.findMany();
  }

 async findOne(id: number) {
    // return `This action returns a #${id} auth`;
     return await this.prisma.reply.findUnique({ where: { id: id } });
  }

 async update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

 async remove(id: number) {
    // return `This action removes a #${id} auth`;
     return await this.prisma.reply.delete({ where: { id } });
  }
  sigVerify = async (createLoginDto: CreateLoginDto) => {
    const { signature, address, msg, nonce }: any = createLoginDto;

    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const Verifyaddress = recoverPersonalSignature({
      data: msgBufferHex,
      sig: signature,
    });
    const currentUser:any = await this.prisma.user.findFirst({
      where: {
        address: Verifyaddress,
      },
    });
    console.log('currentUser', currentUser);
    if (!currentUser || currentUser == null) {
      throw new UnauthorizedException('Signature verification failed');
    }
    const payload = { address: Verifyaddress, role: currentUser?.role };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
    });
    console.log('token verify', token);
    return token;

  };

  async login(createLoginDto: CreateLoginDto) {
    const { address, nonce }: any = createLoginDto;
    const currentUser = await this.prisma.user.findFirst({
      where: {
        address: address,
      },
    });

    if (currentUser) {
      const msg = `I am signing my one-time nonce: ${currentUser.nonce}`;
      return { msg: msg, nonce: currentUser.nonce, status: true };
    } else {
      const payload: any = {
        address: address,
        nonce: nonce.toString(),
        role : 'user'
      };
      await this.prisma.user.create({
        data: payload,
      });
      const msg = `I am signing my one-time nonce: ${nonce}`;
      return { msg: msg, status: false };
    }
  }
}
