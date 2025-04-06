import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjStaff } from '../entities/subj-staff.entity';
import { SubjStaffService } from '../services/subj-staff.service';
import { SubjStaffController } from '../controllers/subj-staff.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubjStaff])],
  providers: [SubjStaffService],
  controllers: [SubjStaffController],
  exports: [SubjStaffService],
})
export class SubjStaffModule {}