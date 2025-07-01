import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/createUserDto';
import { LoginDto } from 'src/users/dtos/loginDto'; // ajuste o path conforme sua estrutura

export class AuthSwagger {
  static register() {
    return applyDecorators(
      ApiOperation({ summary: 'Register a new user' }),
      ApiBody({ type: CreateUserDto }),
      ApiResponse({
        status: 201,
        description: 'User successfully registered.',
      }),
      ApiResponse({
        status: 400,
        description: 'Validation error or bad request.',
      }),
    );
  }

  static login() {
    return applyDecorators(
      ApiOperation({ summary: 'Authenticate a user and return a JWT' }),
      ApiBody({ type: LoginDto }),
      ApiResponse({
        status: 200,
        description: 'Login successful. Returns an access token.',
      }),
      ApiResponse({
        status: 401,
        description: 'Unauthorized: invalid credentials.',
      }),
      ApiResponse({
        status: 400,
        description: 'Validation error or bad request.',
      }),
    );
  }
}
