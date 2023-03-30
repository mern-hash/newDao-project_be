import { Controller } from '@nestjs/common';
import { SnapshotListenerService } from './snapshot-listener.service';

@Controller('snapshot-listener')
export class SnapshotListenerController {
  constructor(private readonly snapshotListenerService: SnapshotListenerService) {}
}
