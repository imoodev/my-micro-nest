import { Controller } from '@nestjs/common';
import { MyAppService } from './my-app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MyAppController {
  constructor(private readonly myAppService: MyAppService) {}

  @MessagePattern({ cmd: 'ping' })
  ping(): string {
    return this.myAppService.getHello();
  }
}
