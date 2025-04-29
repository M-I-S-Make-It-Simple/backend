import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from '../entities/link.entity';
import { CreateLinkDto } from '../dtos/link.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
  ) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const link = this.linkRepository.create(createLinkDto);
    return this.linkRepository.save(link);
  }

  async findAll(): Promise<Link[]> {
    return this.linkRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.linkRepository.delete(id);
  }
}
