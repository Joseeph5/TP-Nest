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

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('rooms')
@Controller('rooms')
export class RoomController {
  constructor(private readonly roomsService: RoomService) {}

  @ApiOperation({ summary: 'Get all rooms' })
  @ApiResponse({ status: 200, description: 'Return all rooms.' })
  @Get()
  findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @ApiOperation({ summary: 'Get a room by ID' })
  @ApiResponse({ status: 200, description: 'Return the room.' })
  @ApiResponse({ status: 404, description: 'Room not found.' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new room' })
  @ApiResponse({
    status: 201,
    description: 'The room has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Post('add-room')
  create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto as Room);
  }

  @ApiOperation({ summary: 'Update a room by ID' })
  @ApiResponse({
    status: 200,
    description: 'The room has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Room not found.' })
  @Put('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<Room> {
    return this.roomsService.update(id, updateRoomDto as Room);
  }

  @ApiOperation({ summary: 'Delete a room by ID' })
  @ApiResponse({
    status: 200,
    description: 'The room has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Room not found.' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.roomsService.remove(id);
  }
}
