import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './news/news.controller';
import { AboutController } from './about/about.controller';
import { StaffController } from './staff/staff.controller';
import { TransparencyController } from './transparency/transparency.controller';
import { EducationController } from './education/education.controller';
import { MethodologyController } from './methodology/methodology.controller';
import { InfoPageController } from './info-page/info-page.controller';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    // Статичний HTML файл з публічної папки (головна сторінка)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',   // Ваш логін для MySQL
      password: 'root',   // Ваш пароль
      database: 'назвавашоїбд',  // Назва вашої бази даних
      entities: [join(__dirname, '*', '.entity.{ts,js}')],  // Шлях до ваших entity-класів
      synchronize: false,  // Для продакшену має бути false!
    }),
    NewsModule

  ],
  controllers: [
    NewsController,
    AboutController,
    StaffController,
    TransparencyController,
    EducationController,
    MethodologyController,
    InfoPageController,
  ],
})
export class AppModule {}