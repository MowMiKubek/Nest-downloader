import { Injectable } from '@nestjs/common';
import { VideosRepository } from './repos/videos.repository';
import { VehiclesRepository } from './repos/vehicles.repository';

@Injectable()
export class StatsService {
  constructor(
    private videosRepo: VideosRepository,
    private vehiclesRepo: VehiclesRepository,
  ) {}

  async findAllVideos() {
    return await this.videosRepo.find();
  }

  async findOneVideo(id: string) {
    return await this.videosRepo.findOne(id);
  }

  async findAllVehicles() {
    return await this.vehiclesRepo.find();
  }

  async findOneVehicle(id: string) {
    return await this.vehiclesRepo.findOne(id);
  }
}
