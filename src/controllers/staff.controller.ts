import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { StaffService } from '../services/staff.service';
import { Staff } from '../entities/staff.entity';
import { CreateStaffDto, UpdateStaffDto } from '../dtos/staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  findAll(): Promise<Staff[]> {
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Staff> {
    return this.staffService.findOne(id);
  }

  @Post()
  create(@Body() createStaffDto: CreateStaffDto): Promise<Staff> {
    return this.staffService.create(createStaffDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStaffDto: UpdateStaffDto,
  ): Promise<Staff> {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.staffService.remove(id);
  }
}