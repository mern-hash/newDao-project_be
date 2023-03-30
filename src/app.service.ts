import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { Role } from './auth/role-enums/role.enum';
const db = require('./db')
@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getHello(): string {

    const code: any = { role: Role.Admin };
    const token = this.jwtService.sign(
      code ,
      { secret: 'JWT-SECRET', expiresIn: '1d' },
    );
    return token;
  }
}
