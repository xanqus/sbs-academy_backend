import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entity/user.entity';

@Injectable()
export class UserApiService {
  constructor(
    @InjectRepository(UserEntity)
    private UserApiRepository: Repository<UserEntity>,
  ) {}

  async createUser(studentName: string, discordId: number) {
    const user = new UserEntity();
    user.studentName = studentName;
    user.discordId = discordId;

    await this.UserApiRepository.save(user);

    return user;
  }

  async getStudentNameByDiscordId(discordId: number) {
    return await this.UserApiRepository.findOne({ where: { discordId } });
  }
}
