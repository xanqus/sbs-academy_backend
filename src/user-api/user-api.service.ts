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

    const qb = await this.UserApiRepository.createQueryBuilder()
      .select('*')
      .where('discordId = :discordId', {
        discordId,
      })
      .execute();

    if (qb.length === 0) {
      await this.UserApiRepository.save(user);
    } else {
      qb[0].studentName = studentName;
      await this.UserApiRepository.save(qb[0]);
    }

    return user;
  }

  async getStudentNameByDiscordId(discordId: number) {
    return await this.UserApiRepository.findOne({ where: { discordId } });
  }
}
