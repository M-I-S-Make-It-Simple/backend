import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassSubj } from '../entities/class-subj.entity';
import { ClassSubjService } from '../services/class-subj.service';
import { ClassSubjController } from '../controllers/class-subj.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClassSubj])],
  providers: [ClassSubjService],
  controllers: [ClassSubjController],
  exports: [ClassSubjService],
})
export class ClassSubjModule {}