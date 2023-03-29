import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto, CreateLoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-ethereum-siwe';
import { Prisma, PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { Role } from './role-enums/role.enum';
// import Web3 from 'web3';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient, private jwtService: JwtService) {
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
  }

 async findAll() {
  
  }

 async findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

 async update(id: number, updateAuthDto: UpdateAuthDto) {
  
  }

 async remove(id: number) {
  }
  sigVerify = async (createLoginDto: CreateLoginDto) => {
    const { signature, address, msg, nonce }: any = createLoginDto;

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
    if (!currentUser || currentUser == null) {
      throw new UnauthorizedException('Signature verification failed');
    }
    const payload = { address: Verifyaddress, role: Role.Admin };
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
      };
      await this.prisma.user.create({
        data: payload,
      });
      const msg = `I am signing my one-time nonce: ${nonce}`;
      return { msg: msg, status: false };
    }
  }
}
