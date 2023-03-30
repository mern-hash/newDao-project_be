import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DiscussionsModule } from './discussions/discussions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SnapshotListenerModule } from './snapshot-listener/snapshot-listener.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SnapshotModule } from './snapshot/snapshot.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import {
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './auth/middleware/logger.middleware';
import { EthAuthGuard } from './auth/eth-guard/eth-guard';

@Module({
  imports: [
    PrismaModule,
    DiscussionsModule,
    AuthModule,
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    SnapshotListenerModule,
    SnapshotModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: EthAuthGuard,
    // },
  ],
})
export class AppModule {}
// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes({
//       path: '/login/ethereum/challenge',
//       method: RequestMethod.POST,
//     });
//   }
// }
