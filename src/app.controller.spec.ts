import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aboutus')
  getAboutUs() {
    return this.appService.getAboutUs();
  }

  @Get('get-today')
  getToday() {
    return this.appService.getToday();
  }

  @Get('get-email')
  getEmail(@Query('mssv') mssv: string, @Query('name') name: string) {
    return this.appService.getEmail(mssv, name);
  }

  // @Get('exchange-rate')
  // getExchangeRate(@Query('currency') currency: string) {
  //   return this.appService.getExchangeRate(currency);
  // }

  // @Get('generate-qrcode')
  // generateQRCode(@Query('text') text: string) {
  //   return this.appService.generateQRCode(text);
  // }

  // @Get('vnpay-code')
  // getVNPayCode() {
  //   return this.appService.getVNPayCode();
  // }
}
