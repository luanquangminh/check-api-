import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome() {
    return 'Welcome to the homepage!';
  }

  // about us
  @Get('aboutus')
  getAboutUs() {
    return this.appService.getAboutUs();
  }

  // today
  @Get('get-today')
  getToday() {
    return this.appService.getToday();
  }

  // email
  @Get('get-email')
  getEmail(@Query('mssv') mssv: string, @Query('name') name: string) {
    return this.appService.getEmail(mssv, name);
  }
}
