import { Injectable } from "@nestjs/common";
import { readFile } from 'fs/promises';
import { join } from "path";
@Injectable()
export class VideosRepository {
    async findOne(id: string) {
        const contents = await readFile(join(process.cwd(), 'src/stats/repos/videos.json'), 'utf8');
        const videos = JSON.parse(contents);
        return videos.find(video => video.id === id);
    }

    async find() {
        const contents = await readFile(join(process.cwd(), 'src/stats/repos/videos.json'), 'utf8');
        const videos = JSON.parse(contents);
        return videos;
    }

}