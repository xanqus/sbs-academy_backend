import { Test, TestingModule } from '@nestjs/testing';
import { StudytimeApiService } from './studytime-api.service';

describe('StudytimeApiService', () => {
  let service: StudytimeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudytimeApiService],
    }).compile();

    service = module.get<StudytimeApiService>(StudytimeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
