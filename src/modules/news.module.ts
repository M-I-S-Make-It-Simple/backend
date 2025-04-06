import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '../entities/news.entity';
import { NewsService } from '../services/news.service';
import { NewsController } from '../controllers/news.controller';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  providers: [NewsService],
  controllers: [NewsController],
  exports: [NewsService],
})
export class NewsModule {}