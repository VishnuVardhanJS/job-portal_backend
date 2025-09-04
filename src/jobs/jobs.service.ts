import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobsRepository.find();
  }

  findOne(id: number): Promise<Job | null> {
    return this.jobsRepository.findOneBy({ id });
  }

  create(job: Partial<Job>): Promise<Job> {
    const newJob = this.jobsRepository.create(job);
    return this.jobsRepository.save(newJob);
  }

  async remove(id: number): Promise<void> {
    await this.jobsRepository.delete(id);
  }
}
