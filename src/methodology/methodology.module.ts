import { Module } from '@nestjs/common';
import { MethodologyController } from './methodology.controller';

@Module({
  controllers: [MethodologyController]
})
export class MethodologyModule {}
