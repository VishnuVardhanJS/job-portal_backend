import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Job | null> {
    return this.jobsService.findOne(+id);
  }

  @Post()
  create(@Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobsService.create(jobData);
  }
}
