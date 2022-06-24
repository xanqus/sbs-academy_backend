import { Body, Controller, Get, Headers, HostParam, Post } from '@nestjs/common';

@Controller({ path:'studytime', host: ':version.api.test' })
export class StudytimeApiController {
  @Get()
  getHello(@HostParam('version') version: string){
    return `hello api ${version}`;
  }

  @Post()
  uploadStudyTime(@HostParam('version') version: string, @Body() dto, @Headers() headers){
    console.log(headers);
    console.log(dto);
    
    return `dto uploaded ${version}`;
  }

}
