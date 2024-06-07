import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  roomType: string;

  @Prop({ required: true })
  roomPrice: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
