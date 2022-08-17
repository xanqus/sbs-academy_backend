import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUserDidNotSubmit(lectureID, date: any) {
    return await this.userRepository.query(
      `
    SELECT *
    FROM \`User\`
    WHERE studentName
    NOT IN (
        SELECT studentName
        FROM \`User\`
        LEFT JOIN \`StudyTime\`
        ON \`User\`.discordID = \`StudyTime\`.discordID
        WHERE DATE(created_at) = ?
    )
    AND lectureID = ?
    AND discordID
    NOT IN (
        '988298877058826282',
        '784289256356839445',
        '405361911115284490',
        '784293332003848202'
    )
    `,
      [date, lectureID],
    );
  }
}
