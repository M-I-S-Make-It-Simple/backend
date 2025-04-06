import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from '../entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAllNews() {
    return { title: 'Новини', content: 'Останні новини ліцею' };
  }
  @Get()
  findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<News | null> {
    return this.newsService.findOne(+id);
  }
}
