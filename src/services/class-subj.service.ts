import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassSubj } from '../entities/class-subj.entity';
import { CreateClassSubjDto } from '../dtos/class-subj.dto';

@Injectable()
export class ClassSubjService {
  constructor(
    @InjectRepository(ClassSubj)
    private classSubjRepository: Repository<ClassSubj>,
  ) {}

  async findAll(): Promise<ClassSubj[]> {
    return this.classSubjRepository.find();
  }

  async findByClassId(classId: number): Promise<ClassSubj[]> {
    return this.classSubjRepository.find({
      where: { class_id: classId },
      relations: ['subject'],
    });
  }

  async findBySubjectId(subjId: number): Promise<ClassSubj[]> {
    return this.classSubjRepository.find({
      where: { subj_id: subjId },
      relations: ['class'],
    });
  }

  async create(createClassSubjDto: CreateClassSubjDto): Promise<ClassSubj> {
    const classSubj = this.classSubjRepository.create(createClassSubjDto);
    return this.classSubjRepository.save(classSubj);
  }

  async remove(classId: number, subjId: number): Promise<void> {
    const result = await this.classSubjRepository.delete({
      class_id: classId,
      subj_id: subjId,
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Class-Subject relation not found`);
    }
  }
}