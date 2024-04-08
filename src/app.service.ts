/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Importing GoogleGenerativeAI directly

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateText(prompt: string): Promise<string> { // Renamed the method to generateText
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI('AIzaSyBMxA6LP5oQe37sbFkdIIOaMf51k1Z1L_w'); // Replace 'YOUR_API_KEY' with your actual API key

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text(); // Await the text() method
    console.log(text);
    return text;
  }
}
