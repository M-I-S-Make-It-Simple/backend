import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Staff } from './staff.entity';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  heading: string;

  @Column({ type: 'date' })
  publication_date: Date;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  author_id: number;

  @ManyToOne(() => Staff, staff => staff.news)
  @JoinColumn({ name: 'author_id' })
  author: Staff;
}