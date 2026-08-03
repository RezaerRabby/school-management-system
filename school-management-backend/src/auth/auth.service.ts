// import { Injectable, Render } from '@nestjs/common';
// import { CreateAuthDto } from './dto/login.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Auth } from './entities/auth.entity';
// import { Repository } from 'typeorm';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//  constructor(
//   @InjectRepository(Auth)
//    private readonly userRepository: Repository<Auth>,
//   private readonly jwtService: JwtService
//   ) {}
//   async login(loginDto: LoginDto) {
//   const user = await this.usersService.findByEmail(loginDto.email);

//   if (!user) {
//     throw new UnauthorizedException('Invalid email or password');
//   }

//   return user;
// }

//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }







import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // পরে bcrypt দিয়ে password compare করা হবে।
    if (user.password !== loginDto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    };
  }
}