import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ClassSubjService } from '../services/class-subj.service';
import { ClassSubj } from '../entities/class-subj.entity';
import { CreateClassSubjDto } from '../dtos/class-subj.dto';

@Controller('class-subjects')
export class ClassSubjController {
  constructor(private readonly classSubjService: ClassSubjService) {}

  @Get()
  findAll(): Promise<ClassSubj[]> {
    return this.classSubjService.findAll();
  }

  @Get('class/:id')
  findByClassId(@Param('id', ParseIntPipe) id: number): Promise<ClassSubj[]> {
    return this.classSubjService.findByClassId(id);
  }

  @Get('subject/:id')
  findBySubjectId(@Param('id', ParseIntPipe) id: number): Promise<ClassSubj[]> {
    return this.classSubjService.findBySubjectId(id);
  }

  @Post()
  create(@Body() createClassSubjDto: CreateClassSubjDto): Promise<ClassSubj> {
    return this.classSubjService.create(createClassSubjDto);
  }

  @Delete(':classId/:subjId')
  remove(
    @Param('classId', ParseIntPipe) classId: number,
    @Param('subjId', ParseIntPipe) subjId: number,
  ): Promise<void> {
    return this.classSubjService.remove(classId, subjId);
  }
}