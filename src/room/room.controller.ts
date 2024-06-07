// src/rooms/rooms.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './schemas/room.schema';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomsService: RoomService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @Post('add-room')
  create(@Body() room: Room): Promise<Room> {
    return this.roomsService.create(room);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() room: Room): Promise<Room> {
    return this.roomsService.update(id, room);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.roomsService.remove(id);
  }
}
