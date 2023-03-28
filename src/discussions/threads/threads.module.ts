import { Module } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { ThreadsController } from './threads.controller';
import { CommentsService } from './comments/comments.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ThreadsController],
  providers: [ThreadsService, CommentsService , PrismaService]
})
export class ThreadsModule {}
