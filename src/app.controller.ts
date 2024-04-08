/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from '@nestjs/common';

@Controller('chatbot')
export class AppController {
  constructor(private readonly bardService: AppService) { }


  @Get('getHello')
  getHello(): string {
    return this.bardService.getHello();
  }



  @Get()
  async getResponse(@Query('message') message: string): Promise<any> {
    const prompt = `תן תשובה הולמת להודעה: ${message}`;
    const response = await this.bardService.generateText(prompt);
    return response;
  }
}

