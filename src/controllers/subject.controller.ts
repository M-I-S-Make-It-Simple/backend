import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../entities/subject.entity';
import { CreateSubjectDto, UpdateSubjectDto } from '../dtos/subject.dto';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): Promise<Subject[]> {
    return this.subjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Subject> {
    return this.subjectService.findOne(id);
  }

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectService.create(createSubjectDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.subjectService.remove(id);
  }
}