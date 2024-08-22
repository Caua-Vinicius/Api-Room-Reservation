import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/createUserDto';
import { Users } from './users.model';
import { LoginDto } from './dtos/loginDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<Users>,
    private readonly jwtService: JwtService,
  ) {}

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

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    const payload = { username: user.email, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, pass: string): Promise<Users> {
    const user = await this.userModel.findOne({ email });
    if (user && (await this.comparePassword(pass, user.password_hash))) {
      return user;
    }
    return null;
  }

  // Decrypt the Password and return if they are the same
  private async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
