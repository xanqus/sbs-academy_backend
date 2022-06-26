import { Body, Controller, Get, HostParam, Post } from '@nestjs/common';
import { StudytimeService } from './studytime.service';

@Controller({ path: 'studytime', host: 'test' })
export class StudytimeController {
  constructor(private studytimeService: StudytimeService) {}
  @Get()
  getHello() {
    return 'hello';
  }

  @Post()
  getPost() {
    return 'post!';
  }
}
