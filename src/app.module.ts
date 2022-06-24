import { Module } from '@nestjs/common';
import {  StudytimeController } from './studytime/studytime.controller';
import { ConfigModule } from '@nestjs/config';
import { StudytimeService } from './studytime/studytime.service';
import { StudytimeApiController } from './studytime-api/studytime-api.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
  ],
  controllers: [StudytimeApiController, StudytimeController],
  providers: [StudytimeService]
})
export class AppModule {}
