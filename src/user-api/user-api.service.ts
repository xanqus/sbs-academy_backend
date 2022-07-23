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

  async createUser(studentName: string, lectureID: string, discordID: number) {
    const user = new UserEntity();
    user.studentName = studentName;
    user.discordID = discordID;
    user.lectureID = lectureID;

    const qb = await this.UserApiRepository.createQueryBuilder()
      .select('*')
      .where('discordID = :discordID', {
        discordID,
      })
      .execute();

    if (qb.length === 0) {
      await this.UserApiRepository.save(user);
    } else {
      qb[0].studentName = studentName;
      qb[0].lectureID = lectureID;
      await this.UserApiRepository.save(qb[0]);
    }

    return user;
  }

  async getUserInfo(discordID: string) {
    return await this.UserApiRepository.findOne({ where: { discordID } });
  }
}
