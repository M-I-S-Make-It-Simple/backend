import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../entities/class.entity';
import { CreateClassDto, UpdateClassDto } from '../dtos/class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  async findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  async findOne(id: number): Promise<Class> {
    const classEntity = await this.classRepository.findOne({ where: { id } });
    if (!classEntity) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    return classEntity;
  }

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const classEntity = this.classRepository.create(createClassDto);
    return this.classRepository.save(classEntity);
  }

  async update(id: number, updateClassDto: UpdateClassDto): Promise<Class> {
    const classEntity = await this.findOne(id);
    const updatedClass = Object.assign(classEntity, updateClassDto);
    return this.classRepository.save(updatedClass);
  }

  async remove(id: number): Promise<void> {
    const result = await this.classRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
  }
}