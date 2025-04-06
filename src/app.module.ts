import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './modules/subj.module';
import { StaffModule } from './modules/staff.module';
import { ClassModule } from './modules/class.module';
import { ClassSubjModule } from './modules/class-subj.module';
import { SubjStaffModule } from './modules/subj-staff.module';
import { NewsModule } from './modules/news.module';
import { Subject } from './entities/subject.entity';
import { Staff } from './entities/staff.entity';
import { Class } from './entities/class.entity';
import { ClassSubj } from './entities/class-subj.entity';
import { SubjStaff } from './entities/subj-staff.entity';
import { News } from './entities/news.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Змініть на потрібний тип бази даних (mysql, postgres, тощо)
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '04062007',
      database: 'lyceum_db',
      entities: [Subject, Staff, Class, ClassSubj, SubjStaff, News],
      synchronize: false, // В production має бути false
    }),
    SubjectModule,
    StaffModule,
    ClassModule,
    ClassSubjModule,
    SubjStaffModule,
    NewsModule,
  ],
})
export class AppModule {}