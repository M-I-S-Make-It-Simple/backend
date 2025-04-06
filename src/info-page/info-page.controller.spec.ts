import { Test, TestingModule } from '@nestjs/testing';
import { InfoPageController } from './info-page.controller';

describe('InfoPageController', () => {
  let controller: InfoPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoPageController],
    }).compile();

    controller = module.get<InfoPageController>(InfoPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
