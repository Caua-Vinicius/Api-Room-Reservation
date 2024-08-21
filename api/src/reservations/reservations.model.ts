import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Types } from 'mongoose';
import { Users } from '../users/users.model';
import { Rooms } from '../rooms/rooms.model';

@Schema({ timestamps: true })
export class Reservations extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user_id: Users;

  @Prop({ type: Types.ObjectId, ref: 'Room' })
  room_id: Rooms;

  @Prop()
  start_time: Date;

  @Prop()
  end_time: Date;

  @Prop()
  participants: number;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservations);
