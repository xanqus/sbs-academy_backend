import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { StudyTimeEntity } from 'src/studytime/entity/studytime.entity';
import { UserApiService } from 'src/user-api/user-api.service';
import moment from 'moment';

@Injectable()
export class StudytimeApiService {
  constructor(
    @InjectRepository(StudyTimeEntity)
    private StudyTimeApiRepository: Repository<StudyTimeEntity>,
    private userApiService: UserApiService,
  ) {}

  async uploadStudyTime(
    discordId: number,
    videoTime: number,
    youtubeWatchCount: number,
    baekjoonTime: number,
    blogUploadCount: number,
  ) {
    const date = new Date();

    const qb = await this.StudyTimeApiRepository.createQueryBuilder()
      .select('*')
      .where('DATE(created_at) = :today', {
        today: '2022-06-27',
      })
      .andWhere('discordId = :discordId', { discordId })
      .execute();

    let studyTime;

    if (qb.length === 0) {
      studyTime = new StudyTimeEntity();
      studyTime.discordId = discordId;
      studyTime.videoTime = videoTime;
      studyTime.youtubeWatchCount = youtubeWatchCount;
      studyTime.baekjoonTime = baekjoonTime;
      studyTime.blogUploadCount = blogUploadCount;
      studyTime.created_at = date;
      studyTime.updated_at = date;

      await this.StudyTimeApiRepository.save(studyTime);
      console.log(qb);
      console.log('dont exsits');
    } else {
      qb[0].videoTime = videoTime;
      qb[0].youtubeWatchCount = youtubeWatchCount;
      qb[0].baekjoonTime = baekjoonTime;
      qb[0].blogUploadCount = blogUploadCount;
      qb[0].updated_at = new Date();
      await this.StudyTimeApiRepository.save(qb[0]);
      console.log(qb);
      console.log('exsits');
    }

    return studyTime;
  }

  async getTotalStudyTime(discordId: string) {
    const totalDataArray = await this.StudyTimeApiRepository.find({
      where: { discordId },
    });
    const userInfo = await this.userApiService.getStudentNameByDiscordId(
      parseInt(discordId),
    );

    let totalVideoTime = 0;
    let totalYoutubeWatchCount = 0;
    let totalBaekjoonTime = 0;
    let totlaBlogUploadCount = 0;
    for (let i = 0; i < totalDataArray.length; i++) {
      totalVideoTime += totalDataArray[i].videoTime;
      totalYoutubeWatchCount += totalDataArray[i].youtubeWatchCount;
      totalBaekjoonTime += totalDataArray[i].baekjoonTime;
      totlaBlogUploadCount += totalDataArray[i].blogUploadCount;
    }

    const totalData = {
      name: userInfo.studentName,
      totalVideoTime,
      totalYoutubeWatchCount,
      totalBaekjoonTime,
      totlaBlogUploadCount,
    };
    return totalData;
  }
}
