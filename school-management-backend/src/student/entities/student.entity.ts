import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true, length: 50 })
  studentId: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column({ length: 20 })
  gender: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 100 })
  guardianName: string;

  @Column({ length: 20 })
  guardianPhone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
