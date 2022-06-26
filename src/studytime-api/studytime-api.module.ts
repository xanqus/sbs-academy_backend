import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyTimeEntity } from 'src/studytime/entity/studytime.entity';
import { UserApiModule } from 'src/user-api/user-api.module';
import { StudytimeApiController } from './studytime-api.controller';
import { StudytimeApiService } from './studytime-api.service';

@Module({
  imports: [UserApiModule, TypeOrmModule.forFeature([StudyTimeEntity])],
  controllers: [StudytimeApiController],
  providers: [StudytimeApiService],
})
export class StudytimeApiModule {}
