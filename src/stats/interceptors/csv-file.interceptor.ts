import { Parser } from "@json2csv/plainjs";
import { CallHandler, ExecutionContext, Injectable } from "@nestjs/common";
import { Response } from "express";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { flatten } from "@json2csv/transforms";

@Injectable()
export class CsvFileInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse<Response>();

    return next.handle().pipe(
        map(async (data) => {
            if(req.url.endsWith('/csv')) {
                try {
                    const parser = new Parser({
                        transforms: [
                            flatten({ objects: true, arrays: true, separator: '_' })
                        ]
                    });
                    const csv = parser.parse(data);
                    res.header('Content-Type', 'text/csv');
                    res.attachment('stats.csv');
                    return csv;
                } catch (error) {
                    return res.status(500).send('Error generating CSV file');
                }
            }
            if(req.url.endsWith('/json')) {
                res.header('Content-Type', 'application/json');
                res.attachment('stats.json');
                return data;
            }
            return data;
        })
    );
  }
}