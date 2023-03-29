import { Module } from '@nestjs/common';
import { SnapshotService } from './snapshot.service';
import { SnapshotController } from './snapshot.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SnapshotController],
  providers: [SnapshotService,PrismaService]
})
export class SnapshotModule {}
