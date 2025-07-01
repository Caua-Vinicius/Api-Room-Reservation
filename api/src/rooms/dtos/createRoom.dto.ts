import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({
    description: 'The name of the room',
    example: 'Conference Room A',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The capacity of the room',
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @ApiProperty({
    description: 'The resources available in the room',
    example: 'Projector, Whiteboard, WiFi',
  })
  @IsNotEmpty()
  @IsString()
  resourses: string;

  @ApiProperty({
    description: 'The location of the room',
    example: 'First Floor, Building B',
  })
  @IsNotEmpty()
  @IsString()
  location: string;
}
