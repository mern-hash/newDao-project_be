import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus } from '@nestjs/common';
// import {} from ''

@Injectable()
export class EthAuthGuard extends AuthGuard('ethereum') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): any {
          const ctx = context
            .switchToHttp()
            .getRequest()

    return super.canActivate(context);
  }
}
