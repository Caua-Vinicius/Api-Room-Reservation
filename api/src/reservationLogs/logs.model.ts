import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Users } from '../users/users.model';

@Schema({ timestamps: true })
export class Logs extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user_id: Users;

  @Prop()
  action: string;
}

export const LogsSchema = SchemaFactory.createForClass(Logs);
