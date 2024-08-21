import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './AuthService.service';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { Users, UserSchema } from './users.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [AuthService, UserService],
})
export class UsersModule {}
