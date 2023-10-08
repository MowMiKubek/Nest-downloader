import { Injectable } from "@nestjs/common";
import { readFile } from 'fs/promises';
import { join } from "path";
@Injectable()
export class VehiclesRepository {
    async findOne(id: string) {
        const contents = await readFile(join(process.cwd(), 'src/stats/repos/vehicles.json'), 'utf8');
        const vehicles = JSON.parse(contents);
        return vehicles.find(vehicle => vehicle.id === id);
    }

    async find() {
        const contents = await readFile(join(process.cwd(), 'src/stats/repos/vehicles.json'), 'utf8');
        const vehicles = JSON.parse(contents);
        return vehicles;
    }

}