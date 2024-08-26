import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface RoomInterface {
  name: string;
  capacity: number;
  resourses: string;
  location: string;
}

@Schema({ timestamps: true })
export class Rooms extends Document {
  @Prop()
  name: string;

  @Prop()
  capacity: number;

  @Prop()
  resourses: string;

  @Prop()
  location: string;
}

export const RoomSchema = SchemaFactory.createForClass(Rooms);
