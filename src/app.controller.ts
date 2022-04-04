import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  getHello(): string {
    console.log(process.env.NODE_ENV);
    console.log(process.env.DATABASE_HOST);
    return process.env.DATABASE_HOST;
  }
  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService(): string {
    return this.configService.get('DATABASE_HOST');
  }
}
