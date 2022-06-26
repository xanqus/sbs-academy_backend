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
      discordId,
      videoTime,
      youtubeWatchCount,
      baekjoonTime,
      blogUploadCount,
    } = dto;
    return await this.studytimeApiService.uploadStudyTime(
      discordId,
      videoTime,
      youtubeWatchCount,
      baekjoonTime,
      blogUploadCount,
    );
  }

  @Post('/:discordId')
  async getTotalStudyTime(@Param('discordId') discordId: string) {
    return await this.studytimeApiService.getTotalStudyTime(discordId);
  }
}
