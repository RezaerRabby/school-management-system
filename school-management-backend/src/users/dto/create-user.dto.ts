// import {
//   IsEmail,
//   IsEnum,
//   IsNotEmpty,
//   IsOptional,
//   IsString,
//   MinLength,
// } from 'class-validator';

// import { UserRole } from '../entities/user.entity';

// export class CreateUserDto {

//   @IsString()
//   @IsNotEmpty()
//   fullName: string;

//   @IsEmail()
//   email: string;

//   @IsString()
//   @MinLength(6)
//   password: string;

//   @IsOptional()
//   phone?: string;

//   @IsEnum(UserRole)
//   role: UserRole;

// }


import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';

// export enum UserRole {
//   ADMIN = 'ADMIN',
//   TEACHER = 'TEACHER',
//   STUDENT = 'STUDENT',
//   PARENT = 'PARENT',
//   STAFF = 'STAFF',
// }

export class CreateUserDto {
  @ApiProperty({
    example: 'Md. Rezaer Rabby',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: 'reza@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123456',
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({
    example: '01712345678',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.ADMIN,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiPropertyOptional({
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}