import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyTimeEntity } from './entity/studytime.entity';

@Injectable()
export class StudytimeService {
  constructor(
    @InjectRepository(StudyTimeEntity)
    private studyTimeRepository: Repository<StudyTimeEntity>,
  ) {}

  getAll() {
    return this.studyTimeRepository.find();
  }

  getStudyTimeOrderByVideoTime() {
    const data = this.studyTimeRepository.query(
      `
        SELECT *
        FROM (
            SELECT discordID,
            SUM(videoTime) AS videoTimeSum,
            SUM(youtubeWatchCount) AS youtubeWatchCountSum,
            SUM(baekjoonTime) AS baekjoonTimeSum,
            SUM(blogUploadCount) AS blogUploadCountSum
            FROM \`StudyTime\`
            WHERE lectureID = "20220712I"
            AND discordID
            NOT IN (
                '988298877058826282',
                '784289256356839445',
                '405361911115284490',
                '784293332003848202'
            )
            GROUP BY discordID
            ORDER BY youtubeWatchCountSum DESC
        )A
        LEFT JOIN \`User\`
        ON \`User\`.discordID  = A.discordID
        `,
    );
    return data;
  }
}
