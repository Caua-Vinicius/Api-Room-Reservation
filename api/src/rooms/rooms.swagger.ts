import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

export class RoomsSwagger{
    static createRoom(){
        return applyDecorators(
            ApiOperation({ summary: 'Create a new room' }),
            ApiResponse({
                status: 201,
                description: 'Room created successfully',
            }),
            ApiResponse({
                status: 400,
                description: 'Bad Request',
            }),
        )
    }

    static getAllRooms(){
        return applyDecorators(
            ApiOperation({ summary: 'Get all rooms' }),
            ApiResponse({
                status: 200,
                description: 'List of rooms',
            }),
            ApiResponse({
                status: 404,
                description: 'Rooms not found',
            }),
        )
    }
    static getRoomById(){
        return applyDecorators(
            ApiOperation({ summary: 'Get room by ID' }),
            ApiResponse({
                status: 200,
                description: 'Room found',
            }),
            ApiResponse({
                status: 404,
                description: 'Room not found',
            }),
        )
    }
    static updateRoom(){
        return applyDecorators(
            ApiOperation({ summary: 'Update room by ID' }),
            ApiResponse({
                status: 200,
                description: 'Room updated successfully',
            }),
            ApiResponse({
                status: 404,
                description: 'Room not found',
            }),
        )
    }
    static deleteRoom(){
        return applyDecorators(
            ApiOperation({ summary: 'Delete room by ID' }),
            ApiResponse({
                status: 200,
                description: 'Room deleted successfully',
            }),
            ApiResponse({
                status: 404,
                description: 'Room not found',
            }),
        )
    }
}