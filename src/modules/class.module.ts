import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from '../entities/class.entity';
import { ClassService } from '../services/class.service';
import { ClassController } from '../controllers/class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassService],
  controllers: [ClassController],
  exports: [ClassService],
})
export class ClassModule {}