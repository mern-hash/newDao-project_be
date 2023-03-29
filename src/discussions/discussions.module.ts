import { Module } from '@nestjs/common';
import { DiscussionsService } from './discussions.service';
import { DiscussionsController } from './discussions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { ThreadsModule } from './threads/threads.module';
import { AdminModule } from './admin/admin.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [DiscussionsController],
  providers: [DiscussionsService, PrismaClient, DiscussionsService],
  imports: [PrismaModule, ProfileModule, ThreadsModule, AdminModule]
})
export class DiscussionsModule {}
