import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { VehiclesRepository } from './repos/vehicles.repository';
import { VideosRepository } from './repos/videos.repository';

@Module({
  controllers: [StatsController],
  providers: [StatsService, VehiclesRepository, VideosRepository],
})
export class StatsModule {}
