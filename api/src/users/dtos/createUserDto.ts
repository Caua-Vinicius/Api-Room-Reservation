import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Roles } from '../users.model';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  role: Roles;
}
