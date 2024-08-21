import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Types } from 'mongoose';
import { Users } from '../users/users.model';
import { Reservations } from '../reservations/reservations.model';

enum notificationType {
  Confirmation = 'Confirmation',
  Reminder = 'Reminder',
  Cancellation = 'Cancellation',
}

@Schema({ timestamps: true })
export class Notifications extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Reservation' })
  reservation_id: Reservations;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user_id: Users;

  @Prop()
  type: notificationType;

  @Prop()
  sent_at: Date;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
