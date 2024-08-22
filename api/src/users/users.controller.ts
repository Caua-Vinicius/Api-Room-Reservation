import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './AuthService.service';
import { CreateUserDto } from './dtos/createUserDto';
import { UserService } from './users.service';
import { LoginDto } from './dtos/loginDto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Get('')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
