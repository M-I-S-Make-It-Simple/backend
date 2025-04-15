import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subject } from './subject.entity';
import { SubjStaff } from './subj-staff.entity';
import { News } from './news.entity';

@Entity('staff')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  photoUrl: string;

  @Column({ type: 'varchar' })
  fullname: string;

  @Column({ type: 'varchar' })
  position: string;

  @Column({ type: 'text' })
  short_bio: string;

  @OneToMany(() => Subject, subject => subject.teacher)
  subjects: Subject[];

  @OneToMany(() => SubjStaff, subjStaff => subjStaff.staff)
  staffSubjects: SubjStaff[];

  @OneToMany(() => News, news => news.author)
  news: News[];
}