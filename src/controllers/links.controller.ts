import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { LinksService } from '../services/links.service';
import { CreateLinkDto } from '../dtos/link.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get()
  findAll() {
    return this.linksService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.linksService.remove(+id);
  }
}
