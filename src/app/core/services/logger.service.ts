import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    log(data: any) {
        console.log(data);
    }

    logError(data: any) {
        console.error(data);
    }
}
