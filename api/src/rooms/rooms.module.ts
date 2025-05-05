import { MongooseModule } from '@nestjs/mongoose';
import { Rooms, RoomSchema } from './rooms.model';
import { RoomService } from './rooms.service';
import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rooms.name, schema: RoomSchema }]),
  ],
  controllers: [RoomsController],
  providers: [RoomService],
})
export class RoomsModule {}
