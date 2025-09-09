import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('helloMicro') private readonly myAppClient: ClientProxy) {}

  @Get()
  async pingMyApp() {
    const result = await firstValueFrom(
      this.myAppClient.send({ cmd: 'ping' }, {})
    );
    return result;
  }
}