import { Test, TestingModule } from '@nestjs/testing';
import { StudytimeApiController } from './studytime-api.controller';

describe('StudytimeApiController', () => {
  let controller: StudytimeApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudytimeApiController],
    }).compile();

    controller = module.get<StudytimeApiController>(StudytimeApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
