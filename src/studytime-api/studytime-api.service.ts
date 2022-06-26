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
    discordId: number,
    videoTime: number,
    youtubeWatchCount: number,
    baekjoonTime: number,
    blogUploadCount: number,
  ) {
    const studyTime = new StudyTimeEntity();
    studyTime.discordId = discordId;
    studyTime.videoTime = videoTime;
    studyTime.youtubeWatchCount = youtubeWatchCount;
    studyTime.baekjoonTime = baekjoonTime;
    studyTime.blogUploadCount = blogUploadCount;

    await this.StudyTimeApiRepository.save(studyTime);
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
