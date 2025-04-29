import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

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

  @Column("simple-array")
  photoUrl: string[];
}