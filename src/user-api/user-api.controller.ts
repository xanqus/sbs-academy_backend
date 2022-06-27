import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserApiService } from './user-api.service';

@Controller({ path: 'user', host: ':version.api.test' })
export class UserApiController {
  constructor(private userApiService: UserApiService) {}
  @Get()
  getHello() {
    return "Hi I'm user controller";
  }

  @Post()
  async createUser(@Body() dto) {
    const { studentName, discordId } = dto;
    this.userApiService.createUser(studentName, discordId);
  }
}
