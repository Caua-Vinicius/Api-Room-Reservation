import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRoomDto {
  @ApiPropertyOptional({
    description: 'The name of the room',
    example: 'Conference Room A',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'The capacity of the room', example: 50 })
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  capacity?: number;

  @ApiPropertyOptional({
    description: 'The resources available in the room',
    example: 'Projector, Whiteboard',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  resourses?: string;

  @ApiPropertyOptional({
    description: 'The location of the room',
    example: 'Building B, Floor 3',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  location?: string;
}
