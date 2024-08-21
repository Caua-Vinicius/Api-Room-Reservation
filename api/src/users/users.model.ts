import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Roles {
  User = 'User',
  Admin = 'Admin',
}

export interface User {
  name: string;
  email: string;
  passaword_hash: string;
  role: Roles;
}

@Schema({ timestamps: true })
export class Users extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password_hash: string;

  @Prop()
  role: Roles;
}

export const UserSchema = SchemaFactory.createForClass(Users);
