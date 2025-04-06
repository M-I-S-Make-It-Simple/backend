import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ClassService } from '../services/class.service';
import { Class } from '../entities/class.entity';
import { CreateClassDto, UpdateClassDto } from '../dtos/class.dto';

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  findAll(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Class> {
    return this.classService.findOne(id);
  }

  @Post()
  create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classService.create(createClassDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClassDto: UpdateClassDto,
  ): Promise<Class> {
    return this.classService.update(id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.classService.remove(id);
  }
}