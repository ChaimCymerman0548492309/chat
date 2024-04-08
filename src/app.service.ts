/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as detectLanguage from 'langdetect';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  detectLanguage(text: string): string {
    return detectLanguage.detect(text);
  }
}
