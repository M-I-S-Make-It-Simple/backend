import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Staff } from './staff.entity';
import { ClassSubj } from './class-subj.entity';
import { SubjStaff } from './subj-staff.entity';

@Entity('subject')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  subject_name: string;

  @Column({ type: 'int' })
  teacher_id: number;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Staff;

  @OneToMany(() => ClassSubj, classSubj => classSubj.subject)
  classSubjects: ClassSubj[];

  @OneToMany(() => SubjStaff, subjStaff => subjStaff.subject)
  subjectStaff: SubjStaff[];
}