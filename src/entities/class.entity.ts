import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Staff } from './staff.entity';
import { ClassSubj } from './class-subj.entity';

@Entity('class')
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  class_name: string;

  @Column({ type: 'int' })
  class_teacher: number;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: 'class_teacher' })
  teacher: Staff;

  @OneToMany(() => ClassSubj, classSubj => classSubj.class)
  classSubjects: ClassSubj[];
}