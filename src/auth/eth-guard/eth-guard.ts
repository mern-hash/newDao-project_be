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
            // console.log("huiuhiuhiuhv", ctx)
    //   const isPublic = this.reflector.getAllAndOverride('isPublic', [
    //     context.getHandler(),
    //     context.getClass(),
    //   ]);

    //   if (isPublic) {
    //     return true;
    //   }
    // try{
    //       const ctx = context
    //         .switchToHttp()
    //         .getRequest()
    //         .headers.authorization.split(' ')[1];
    //       const authToken: any = this.jwtService.verify(ctx, {
    //         secret: 'JWT-SECRET',
    //       });
    //       if (authToken) {
    //         return true;
    //       }
    //     } catch (err) {
    //       throw new HttpException(` Invalid token`, HttpStatus.UNAUTHORIZED);
    //     }

    return super.canActivate(context);
  }
}
