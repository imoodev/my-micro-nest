import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    return 'Hello from my-app Microservice! 2025-2026';
  }
}
