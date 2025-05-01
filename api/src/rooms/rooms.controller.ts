import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RoomService } from './rooms.service';
import { CreateRoomDto } from './dtos/createRoom.dto';
import { Rooms } from './rooms.model';
import { AuthJwtGuard } from 'common/guards/auth.guard';
import { RoomsSwagger } from './rooms.swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthJwtGuard)
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomService: RoomService) {}

  @RoomsSwagger.createRoom()
  @Post('create')
  async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Rooms> {
    return this.roomService.createRoom(createRoomDto);
  }

  @RoomsSwagger.getAllRooms()
  @Get('')
  async getAllRooms(): Promise<Rooms[]> {
    return this.roomService.getAllRooms();
  }

  @RoomsSwagger.getRoomById()
  @Get(':id')
  async getRoomById(@Param('id') id: string): Promise<Rooms> {
    return this.roomService.getRoomById(id);
  }

  @RoomsSwagger.updateRoom()
  @Post('/update/:id')
  async updateRoom(
    @Param('id') id: string,
    @Body() updateRoomDto: CreateRoomDto,
  ): Promise<Rooms> {
    return this.roomService.updateRoom(id, updateRoomDto);
  }

  @RoomsSwagger.deleteRoom()
  @Delete('/delete/:id')
  async deleteRoom(@Param('id') id: string): Promise<Rooms> {
    return this.roomService.deleteRoom(id);
  }
}
