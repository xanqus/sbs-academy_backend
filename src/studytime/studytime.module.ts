import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyTimeEntity } from './entity/studytime.entity';
import { StudytimeController } from './studytime.controller';
import { StudytimeService } from './studytime.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudyTimeEntity])],
  controllers: [StudytimeController],
  providers: [StudytimeService],
})
export class StudytimeModule {}
