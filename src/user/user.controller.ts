import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  async getUser() {
    return 'user';
  }

  @Get('/not-submit')
  async getUserDidNotSubmit(
    @Query('date') date,
    @Query('lectureID') lectureID,
  ) {
    return this.userService.getUserDidNotSubmit(lectureID, date);
  }
}
