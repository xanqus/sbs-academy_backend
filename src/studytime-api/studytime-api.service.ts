import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyTimeEntity } from 'src/studytime/entity/studytime.entity';
import { UserApiService } from 'src/user-api/user-api.service';

@Injectable()
export class StudytimeApiService {
  constructor(
    @InjectRepository(StudyTimeEntity)
    private StudyTimeApiRepository: Repository<StudyTimeEntity>,
    private userApiService: UserApiService,
  ) {}

  async uploadStudyTime(
    discordID: number,
    videoTime: number,
    youtubeWatchCount: number,
    baekjoonTime: number,
    blogUploadCount: number,
    lectureID: string,
  ) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const qb = await this.StudyTimeApiRepository.createQueryBuilder()
      .select('*')
      .where('DATE(created_at) = :today', {
        today: `${year}-${month >= 10 ? month : '0' + month}-${
          date >= 10 ? date : '0' + date
        }`,
      })
      .andWhere('discordID = :discordID', { discordID })
      .execute();

    let studyTime;

    if (qb.length === 0) {
      studyTime = new StudyTimeEntity();
      studyTime.discordID = discordID;
      studyTime.videoTime = videoTime;
      studyTime.youtubeWatchCount = youtubeWatchCount;
      studyTime.baekjoonTime = baekjoonTime;
      studyTime.blogUploadCount = blogUploadCount;
      studyTime.created_at = today;
      studyTime.updated_at = today;
      studyTime.lectureID = lectureID;

      await this.StudyTimeApiRepository.save(studyTime);
    } else {
      qb[0].videoTime = videoTime;
      qb[0].youtubeWatchCount = youtubeWatchCount;
      qb[0].baekjoonTime = baekjoonTime;
      qb[0].blogUploadCount = blogUploadCount;
      qb[0].updated_at = new Date();
      qb[0].lectureID = lectureID;
      console.log(qb[0]);
      await this.StudyTimeApiRepository.save(qb[0]);
    }

    return studyTime;
  }

  async getTotalStudyTime(discordID: string) {
    const totalDataArray = await this.StudyTimeApiRepository.find({
      where: { discordID },
    });
    const userInfo = await this.userApiService.getUserInfo(discordID);

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
