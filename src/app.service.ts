/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
// import * as QRCode from 'qrcode';
// import axios from 'axios';

@Injectable()
export class AppService {
  getAboutUs() {
    return {
      name: 'Luân Quang Minh',
      mssv: '123456789',
    };
  }

  getToday() {
    const today = new Date();
    return { date: today.toDateString() };
  }

  getEmail(mssv: string, name: string) {
    return { email: `${name.toLowerCase().replace(/\s+/g, '')}.${mssv}@example.com` };
  }

  // async getExchangeRate(currency: string) {
  //   try {
  //     const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
  //     const rate = response.data.rates[currency.toUpperCase()];
  //     return { currency, rate };
  //   } catch (error) {
  //     throw new Error('Error fetching exchange rate');
  //   }
  // }

  // async generateQRCode(text: string) {
  //   try {
  //     const qrCode = await QRCode.toDataURL(text);
  //     return { qrCode };
  //   } catch (error) {
  //     throw new Error('Could not generate QR code');
  //   }
  // }

  // getVNPayCode() {
  //   return { vnpayCode: 'VNPAY123456789' };
  // }
}
