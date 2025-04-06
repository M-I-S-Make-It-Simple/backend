import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Subject } from './subject.entity';
import { Staff } from './staff.entity';

@Entity('subj-staff')
export class SubjStaff {
  @PrimaryColumn({ type: 'int' })
  subject_id: number;

  @PrimaryColumn({ type: 'int' })
  staff_id: number;

  @ManyToOne(() => Subject, subject => subject.subjectStaff)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @ManyToOne(() => Staff, staff => staff.staffSubjects)
  @JoinColumn({ name: 'staff_id' })
  staff: Staff;
}