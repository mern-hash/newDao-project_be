import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): any {
     try {
       const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
         context.getHandler(),
         context.getClass(),
       ]);
       if (!requiredRoles) {
         return true;
       }

       const ctx = context
         .switchToHttp()
         .getRequest()
         .headers.authorization.split(' ')[1];
       const authToken: any = this.jwtService.decode(ctx as string);

       const authrole = requiredRoles.some((role: string) => {
         switch (role) {
           case 'admin':
             // code block
             const admin = authToken?.role?.includes(role);
             return admin;
             break;
           case 'user':
             const user = authToken?.role?.includes(role);
             return user;
             break;
           case 'moderator':
             const moderator = authToken?.role?.includes(role);
             return moderator;
             break;
           case 'super_user':
             const super_user = authToken?.role?.includes(role);
             return super_user;
             break;
           case 'Controller':
             const Controller = authToken?.role?.includes(role);
             return Controller;
             break;
           default:
             console.log('default');
         }
       });
       if (authrole) {
         return authrole;
       } else {

         throw new HttpException(`Invalid role`, HttpStatus.UNAUTHORIZED);
       }
     } catch (err) {
       throw new HttpException(`Invalid role`, HttpStatus.UNAUTHORIZED);
     }
  }
}
