// src/entities/news.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')  // Назва таблиці в базі даних
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ name: 'created_at' })  // Якщо у БД назва відрізняється
  createdAt: Date;
}