import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  // CREATE
  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  //  find all

  async findAll() {
    return this.studentRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }
  // fineOne
  async findOne(id: number) {
    const student = await this.studentRepository.findOne({
      where: { id },
    });
    if (!student) {
      throw new NotFoundException('student with ID ${id} not found');
    }
    return student;
  }
  // Update
  async update(id: number,updateData: Partial<CreateStudentDto>) {
    const student = await this.findOne(id);

    Object.assign(student, updateData);

    return this.studentRepository.save(student);
  }
  // DELETE
  async remove(id: number) {
    const student = await this.findOne(id);
    await this.studentRepository.remove(student);
    return {
      message: 'Student deleted successfully',
    };
  }
}
