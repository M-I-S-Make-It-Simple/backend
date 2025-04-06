import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SubjStaffService } from '../services/subj-staff.service';
import { SubjStaff } from '../entities/subj-staff.entity';
import { CreateSubjStaffDto } from '../dtos/subj-staff.dto';

@Controller('subject-staff')
export class SubjStaffController {
  constructor(private readonly subjStaffService: SubjStaffService) {}

  @Get()
  findAll(): Promise<SubjStaff[]> {
    return this.subjStaffService.findAll();
  }

  @Get('subject/:id')
  findBySubjectId(@Param('id', ParseIntPipe) id: number): Promise<SubjStaff[]> {
    return this.subjStaffService.findBySubjectId(id);
  }

  @Get('staff/:id')
  findByStaffId(@Param('id', ParseIntPipe) id: number): Promise<SubjStaff[]> {
    return this.subjStaffService.findByStaffId(id);
  }

  @Post()
  create(@Body() createSubjStaffDto: CreateSubjStaffDto): Promise<SubjStaff> {
    return this.subjStaffService.create(createSubjStaffDto);
  }

  @Delete(':subjectId/:staffId')
  remove(
    @Param('subjectId', ParseIntPipe) subjectId: number,
    @Param('staffId', ParseIntPipe) staffId: number,
  ): Promise<void> {
    return this.subjStaffService.remove(subjectId, staffId);
  }
}