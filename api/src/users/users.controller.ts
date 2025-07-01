import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get('')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
