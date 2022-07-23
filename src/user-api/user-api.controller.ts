import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    const { studentName, lectureID, discordID } = dto;
    this.userApiService.createUser(studentName, lectureID, discordID);
  }

  @Post('/:discordID')
  async checkUserInfo(@Param('discordID') discordID: string) {
    return await this.userApiService.getUserInfo(discordID);
  }
}
