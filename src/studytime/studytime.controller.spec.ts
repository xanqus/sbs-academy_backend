import { Test, TestingModule } from '@nestjs/testing';
import { StudytimeController } from './studytime.controller';

describe('StudytimeController', () => {
  let controller: StudytimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudytimeController],
    }).compile();

    controller = module.get<StudytimeController>(StudytimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
