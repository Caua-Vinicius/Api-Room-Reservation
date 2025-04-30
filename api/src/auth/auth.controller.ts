import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/createUserDto';
import { LoginDto } from 'src/users/dtos/loginDto';
import { AuthSwagger } from './auth.swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @AuthSwagger.register()
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}
