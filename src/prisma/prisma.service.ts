import {
  INestApplication,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  // implements OnModuleInit, OnModuleDestroy
{
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  // async OnModuleInit() {
  //   await this.$connect();
  // }
  // async OnModuleDestroy(){
  //   await this.$disconnect();
  // }
}