import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from '../entities/subject.entity';
import { CreateSubjectDto, UpdateSubjectDto } from '../dtos/subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  async findOne(id: number): Promise<Subject> {
    const subject = await this.subjectRepository.findOne({ where: { id } });
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    return subject;
  }

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const subject = this.subjectRepository.create(createSubjectDto);
    return this.subjectRepository.save(subject);
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject> {
    const subject = await this.findOne(id);
    const updatedSubject = Object.assign(subject, updateSubjectDto);
    return this.subjectRepository.save(updatedSubject);
  }

  async remove(id: number): Promise<void> {
    const result = await this.subjectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
  }
}