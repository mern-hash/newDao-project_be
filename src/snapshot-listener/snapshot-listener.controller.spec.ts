import { Test, TestingModule } from '@nestjs/testing';
import { SnapshotListenerController } from './snapshot-listener.controller';
import { SnapshotListenerService } from './snapshot-listener.service';

describe('SnapshotListenerController', () => {
  let controller: SnapshotListenerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnapshotListenerController],
      providers: [SnapshotListenerService],
    }).compile();

    controller = module.get<SnapshotListenerController>(SnapshotListenerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
