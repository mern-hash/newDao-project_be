import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector, private jwtService: JwtService) {
    super();
  }

  canActivate(context: ExecutionContext): any {
      try {
        const isPublic = this.reflector.getAllAndOverride('isPublic', [
          context.getHandler(),
          context.getClass(),
        ]);

        if (isPublic) {
          return true;
        }

        const ctx = context
          .switchToHttp()
          .getRequest()
          .headers.authorization.split(' ')[1];
        const authToken: any = this.jwtService.verify(ctx, {
          secret: 'JWT-SECRET',
        });
        if (authToken) {
          return true;
        }
      } catch (err) {
        throw new HttpException(` Invalid token`, HttpStatus.UNAUTHORIZED);
      }

    return super.canActivate(context);
  }
}
