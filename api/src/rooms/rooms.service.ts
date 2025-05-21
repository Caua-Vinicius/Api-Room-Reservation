import { Model } from 'mongoose';
import { Rooms } from './rooms.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dtos/createRoom.dto';
@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Rooms.name) private readonly roomModel: Model<Rooms>,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<Rooms> {
    const newRoom = await this.roomModel.create({ createRoomDto });
    return newRoom;
  }

  async getAllRooms(): Promise<Rooms[]> {
    return this.roomModel.find().exec();
  }

  async getRoomById(id: string): Promise<Rooms> {
    return this.roomModel.findById(id).exec();
  }

  async updateRoom(id: string, updateRoomDto: Partial<CreateRoomDto>): Promise<Rooms> {
    const updatedRoom = await this.roomModel.findByIdAndUpdate(
      id,
      updateRoomDto,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedRoom)
      throw new NotFoundException(`Room with ID: ${id} not found`);

    return updatedRoom;
  }

  async deleteRoom(id: string): Promise<Rooms> {
    const room = await this.roomModel.findByIdAndDelete(id).exec();
    if (!room) throw new NotFoundException(`Room with ID: ${id} not found`);
    return room;
  }
}
