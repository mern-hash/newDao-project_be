import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private reflector: Reflector, private jwtService: JwtService) {
    super();
  }

  canActivate(context: ExecutionContext): any {
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
    const authToken: any = this.jwtService.decode(ctx as string);
    if (authToken) {
      return true;
    }
    console.log('ctx xx', authToken);
    return super.canActivate(context);
  }
}
