import { Module } from '@nestjs/common';
import { InfoPageController } from './info-page.controller';

@Module({
  controllers: [InfoPageController]
})
export class InfoPageModule {}
