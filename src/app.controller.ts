import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('friends')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('allfriends')
  getWelcome(): string {
    return 'All my friends are sad';
  }
}
