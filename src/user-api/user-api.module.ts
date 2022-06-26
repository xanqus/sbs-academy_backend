import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserApiController],
  providers: [UserApiService],
  exports: [UserApiService],
})
export class UserApiModule {}
