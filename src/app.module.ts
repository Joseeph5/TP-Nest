import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RoomModule, MongooseModule.forRoot('mongodb://localhost/nest-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
