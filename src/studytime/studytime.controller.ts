import { Body, Controller, Get, HostParam, Param, Post } from '@nestjs/common';
import { StudytimeService } from './studytime.service';

@Controller({ path: 'studytime' })
export class StudytimeController {
  constructor(private studytimeService: StudytimeService) {}
  @Get()
  getAll() {
    return this.studytimeService.getAll();
  }

  @Get('/sort/:studyItem/:lectureID')
  async getStudyTimeOrderByVideoTime(
    @Param('studyItem') studyItem: string,
    @Param('lectureID') lectureID: string,
  ) {
    return this.studytimeService.getStudyTimeOrderByVideoTime(
      lectureID,
      studyItem,
    );
  }
}
