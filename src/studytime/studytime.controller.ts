import { Controller, Get, Query } from '@nestjs/common';
import { StudytimeService } from './studytime.service';

@Controller({ path: 'studytime' })
export class StudytimeController {
  constructor(private studytimeService: StudytimeService) {}
  @Get()
  getAll() {
    return this.studytimeService.getAll();
  }

  @Get('/sort')
  async getStudyTimeOrderByVideoTime(
    @Query('studyItem') studyItem: string,
    @Query('lectureID') lectureID: string,
  ) {
    return this.studytimeService.getStudyTimeOrderByVideoTime(
      lectureID,
      studyItem,
    );
  }
}
