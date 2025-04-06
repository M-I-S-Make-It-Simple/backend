import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubjStaff } from '../entities/subj-staff.entity';
import { CreateSubjStaffDto } from '../dtos/subj-staff.dto';

@Injectable()
export class SubjStaffService {
  constructor(
    @InjectRepository(SubjStaff)
    private subjStaffRepository: Repository<SubjStaff>,
  ) {}

  async findAll(): Promise<SubjStaff[]> {
    return this.subjStaffRepository.find();
  }

  async findBySubjectId(subjectId: number): Promise<SubjStaff[]> {
    return this.subjStaffRepository.find({
      where: { subject_id: subjectId },
      relations: ['staff'],
    });
  }

  async findByStaffId(staffId: number): Promise<SubjStaff[]> {
    return this.subjStaffRepository.find({
      where: { staff_id: staffId },
      relations: ['subject'],
    });
  }

  async create(createSubjStaffDto: CreateSubjStaffDto): Promise<SubjStaff> {
    const subjStaff = this.subjStaffRepository.create(createSubjStaffDto);
    return this.subjStaffRepository.save(subjStaff);
  }

  async remove(subjectId: number, staffId: number): Promise<void> {
    const result = await this.subjStaffRepository.delete({
      subject_id: subjectId,
      staff_id: staffId,
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Subject-Staff relation not found`);
    }
  }
}