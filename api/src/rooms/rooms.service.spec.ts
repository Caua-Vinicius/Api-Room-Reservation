import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RoomService } from './rooms.service';
import { Rooms } from './rooms.model';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dtos/createRoom.dto';
import { NotFoundException } from '@nestjs/common';

describe('RoomsService', () => {
  let roomsService: RoomService;
  let mockRoomsModel: Partial<Record<keyof Model<Rooms>, jest.Mock>> = {
    create: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomService,
        { provide: getModelToken(Rooms.name), useValue: mockRoomsModel },
      ],
    }).compile();

    roomsService = new RoomService(mockRoomsModel as unknown as Model<Rooms>);
  });

  it('should be defined', () => {
    expect(roomsService).toBeDefined();
  });

  it('should create a new room', async () => {
    const createRoomDto: CreateRoomDto = {
      name: 'Room A',
      capacity: 10,
      location: 'Building A',
      resourses: 'wifi',
    };

    const createdRoom = {
      _id: '1',
      __v: 0,
      ...createRoomDto,
      save: jest.fn(),
      toObject: jest.fn().mockReturnValue(this),
    };

    mockRoomsModel.create.mockResolvedValue(createdRoom);

    const result = await roomsService.createRoom(createRoomDto);

    expect(result).toEqual(createdRoom);
    expect(mockRoomsModel.create).toHaveBeenCalledWith({ createRoomDto });
  });

  it('should return all rooms', async () => {
    const rooms = [{ _id: '1', name: 'Room A', capacity: 10 }];
    mockRoomsModel.find.mockReturnValue({
      exec: jest.fn().mockResolvedValue(rooms),
    } as any);

    const result = await roomsService.getAllRooms();

    expect(mockRoomsModel.find).toHaveBeenCalled();
    expect(result).toEqual(rooms);
  });

  it('should return a room by ID', async () => {
    const room = { _id: '1', name: 'Room A', capacity: 10 };
    mockRoomsModel.findById.mockReturnValue({
      exec: jest.fn().mockResolvedValue(room),
    } as any);

    const result = await roomsService.getRoomById('1');

    expect(mockRoomsModel.findById).toHaveBeenCalledWith('1');
    expect(result).toEqual(room);
  });

  it('should update a room by ID', async () => {
    const _id = '1';
    const updateRoomDto: CreateRoomDto = {
      name: 'Updated Room',
      capacity: 15,
      location: 'Building B',
      resourses: 'projector',
    };
    const updatedRoom = { _id, ...updateRoomDto };
    mockRoomsModel.findByIdAndUpdate.mockReturnValue({
      _id,
      ...updateRoomDto,
    });

    const result = await roomsService.updateRoom('1', updateRoomDto);

    expect(mockRoomsModel.findByIdAndUpdate).toHaveBeenCalledWith(
      _id,
      updateRoomDto,
      { new: true, runValidators: true },
    );
    expect(result).toEqual(updatedRoom);
  });

  it('should throw NotFoundException if room not found', async () => {
    mockRoomsModel.findByIdAndUpdate.mockReturnValue(null);

    await expect(
      roomsService.updateRoom('1', { name: 'Room' }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should delete a room by ID', async () => {
    const room = { _id: '1', name: 'Room A', capacity: 10 };
    mockRoomsModel.findByIdAndDelete.mockReturnValue({
      exec: jest.fn().mockResolvedValue(room),
    } as any);

    const result = await roomsService.deleteRoom('1');

    expect(mockRoomsModel.findByIdAndDelete).toHaveBeenCalledWith('1');
    expect(result).toEqual(room);
  });

  it('should throw NotFoundException if room not found', async () => {
    mockRoomsModel.findByIdAndDelete.mockReturnValue(null);

    await expect(roomsService.deleteRoom('1')).rejects.toThrow(
      NotFoundException,
    );
  });
});
