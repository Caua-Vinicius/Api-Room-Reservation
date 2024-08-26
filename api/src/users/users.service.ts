import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  async getAllUsers(): Promise<Users[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOneById(id: string): Promise<Users> {
    try {
      const user = this.userModel.findById(id);
      return user;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  }
}
