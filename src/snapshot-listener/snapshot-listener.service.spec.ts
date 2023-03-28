import { Test, TestingModule } from '@nestjs/testing';
import { SnapshotListenerService } from './snapshot-listener.service';

describe('SnapshotListenerService', () => {
  let service: SnapshotListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnapshotListenerService],
    }).compile();

    service = module.get<SnapshotListenerService>(SnapshotListenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
