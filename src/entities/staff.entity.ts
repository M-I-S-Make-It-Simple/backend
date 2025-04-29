import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subject } from './subject.entity';
import { SubjStaff } from './subj-staff.entity';

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

  @Column({ type: 'varchar' }) // нове поле Спільнота
  community: string;

  @OneToMany(() => Subject, subject => subject.teacher)
  subjects: Subject[];
  
  @OneToMany(() => SubjStaff, subjStaff => subjStaff.staff)
  staffSubjects: SubjStaff[];
}