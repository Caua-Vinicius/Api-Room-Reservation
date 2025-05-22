import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RoomsModule } from './rooms/rooms.module';
import { AuthModule } from './auth/auth.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
@Module({
  imports: [
    PrometheusModule.register(),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsersModule,
    AuthModule,
    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
