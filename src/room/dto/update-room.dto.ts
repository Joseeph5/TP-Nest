import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoomDto {
  @ApiProperty({ description: 'The name of the room' })
  name: string;

  @ApiProperty({ description: 'The description of the room', required: false })
  roomType?: string;

  @ApiProperty({ description: 'The capacity of the room' })
  roomPrice: number;
}
