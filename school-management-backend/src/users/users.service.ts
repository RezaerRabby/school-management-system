

// import {
//   ConflictException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   async create(createUserDto: CreateUserDto): Promise<User> {
//      console.log(createUserDto);

//      const user = this.userRepository.create(createUserDto);

//     return this.userRepository.save(user);
//   }

//   // Get All Users
//   async findAll(): Promise<User[]> {
//     return await this.userRepository.find();
//   }

//   // Get Single User
//   async findOne(id: number): Promise<User> {
//     const user = await this.userRepository.findOne({
//       where: { id },
//     });

//     if (!user) {
//       throw new NotFoundException(`User with ID ${id} not found`);
//     }

//     return user;
//   }
//   // Get Single User by Email

//   async findByEmail(email: string) {
//     return this.userRepository.findOne({
//       where: { email },
//     });
//   }

//   // Update User
//   async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
//     const user = await this.findOne(id);

//     Object.assign(user, updateUserDto);

//     return await this.userRepository.save(user);
//   }

//   // Delete User
//   async remove(id: number): Promise<{ message: string }> {
//     const user = await this.findOne(id);

//     await this.userRepository.remove(user);

//     return {
//       message: 'User deleted successfully',
//     };
//   }
// }




import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create User
  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.findByEmail(createUserDto.email);

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }

  // Get All Users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Get User By ID
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  // Get User By Email
  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  // Update User
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.findOne(id);

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  // Delete User
  async remove(id: number): Promise<{ message: string }> {
    const user = await this.findOne(id);

    await this.userRepository.remove(user);

    return {
      message: 'User deleted successfully',
    };
  }
}