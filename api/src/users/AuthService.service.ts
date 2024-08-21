import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/createUserDto';
import { Users } from './users.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  // Hashing the password
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  // Creating a new user aplying hashing to the password
  async register(userDto: CreateUserDto): Promise<Users> {
    const hashedPassword = await this.hashPassword(userDto.password);
    const newUser = new this.userModel({
      ...userDto,
      password_hash: hashedPassword,
    });
    return await newUser.save();
  }

  // Decrypt the Password and return if they are the same
  private async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
