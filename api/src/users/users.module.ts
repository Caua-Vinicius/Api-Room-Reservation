import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './AuthService.service';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { Users, UserSchema } from './users.model';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret',
      signOptions: { expiresIn: '60m' },
    }),
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [AuthService, UserService, JwtStrategy],
})
export class UsersModule {}
