import { Module } from '@nestjs/common';
import { SnapshotListenerService } from './snapshot-listener.service';
import { SnapshotListenerController } from './snapshot-listener.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SnapshotListenerController],
  providers: [SnapshotListenerService]
})
export class SnapshotListenerModule {}
