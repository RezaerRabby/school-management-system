import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }


  @Get('id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<CreateStudentDto>,
  ) {
    return this.studentService.update(
      id,
      updateData,
    );
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.studentService.remove(id);
  }
}
