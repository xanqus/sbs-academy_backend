import { Test, TestingModule } from '@nestjs/testing';
import { StudytimeService } from './studytime.service';

describe('StudytimeService', () => {
  let service: StudytimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudytimeService],
    }).compile();

    service = module.get<StudytimeService>(StudytimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
