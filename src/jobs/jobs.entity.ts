import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobTitle: string;

  @Column()
  companyName: string;

  @Column({ nullable: true })
  companyLogoUrl: string;

  @Column()
  location: string;

  @Column()
  jobType: string;

  @Column()
  salaryMin: number;

  @Column()
  salaryMax: number;

  @Column({ type: 'text' })
  jobDescription: string;

  @Column({ type: 'date', nullable: true })
  deadline: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'text' })
  responsibilities: string;

  @Column({ type: 'text' })
  requirements: string;
}
