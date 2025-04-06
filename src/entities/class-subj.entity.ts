import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Class } from './class.entity';
import { Subject } from './subject.entity';

@Entity('class-subj')
export class ClassSubj {
  @PrimaryColumn({ type: 'int' })
  class_id: number;

  @PrimaryColumn({ type: 'int' })
  subj_id: number;

  @ManyToOne(() => Class, _class => _class.classSubjects)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @ManyToOne(() => Subject, subject => subject.classSubjects)
  @JoinColumn({ name: 'subj_id' })
  subject: Subject;
}