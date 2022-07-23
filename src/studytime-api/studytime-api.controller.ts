import { Body, Controller, Get, HostParam, Param, Post } from '@nestjs/common';
import { StudytimeApiService } from './studytime-api.service';

@Controller({ path: 'studytime', host: ':version.api.test' })
export class StudytimeApiController {
  constructor(private studytimeApiService: StudytimeApiService) {}
  @Get()
  getHello(@HostParam('version') version: string) {
    return `hello api ${version}`;
  }

  @Post()
  async uploadStudyTime(@HostParam('version') version: string, @Body() dto) {
    const {
      discordID,
      videoTime,
      youtubeWatchCount,
      baekjoonTime,
      blogUploadCount,
      lectureID,
    } = dto;

    return await this.studytimeApiService.uploadStudyTime(
      discordID,
      videoTime,
      youtubeWatchCount,
      baekjoonTime,
      blogUploadCount,
      lectureID,
    );
  }

  @Post('/:discordID')
  async getTotalStudyTime(@Param('discordID') discordID: string) {
    console.log('upload');
    return await this.studytimeApiService.getTotalStudyTime(discordID);
  }
}
