import { Body, Controller, Get, HostParam, Post } from '@nestjs/common';
import { StudytimeService } from './studytime.service';

@Controller({ path: 'studytime' })
export class StudytimeController {
  constructor(private studytimeService: StudytimeService) {}
  @Get()
  getAll() {
    return this.studytimeService.getAll();
  }

  @Get('/sort/videoTime')
  getStudyTimeOrderByVideoTime() {
    return this.studytimeService.getStudyTimeOrderByVideoTime();
  }
}
