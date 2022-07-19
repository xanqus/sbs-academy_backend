import { Body, Controller, Get, HostParam, Post } from '@nestjs/common';
import { StudytimeService } from './studytime.service';

@Controller({ path: 'studytime', host: 'test' })
export class StudytimeController {
  constructor(private studytimeService: StudytimeService) {}
  @Get()
  getHello() {
    return `${__dirname}\\config\\env\\.${process.env.NODE_ENV}.env`;
  }

  @Post()
  getPost() {
    return 'post!';
  }
}
