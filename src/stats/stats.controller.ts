import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { StatsService } from './stats.service';
import { CsvFileInterceptor } from './interceptors/csv-file.interceptor';

@UseInterceptors(CsvFileInterceptor)
@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('videos/*')
  findAllVideos() {
    return this.statsService.findAllVideos();
  }

  @Get('vehicles/*')
  findAllVehicles() {
    return this.statsService.findAllVehicles();
  }


}
