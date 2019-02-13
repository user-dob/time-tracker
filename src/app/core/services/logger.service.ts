import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() { }

    log(data: any) {
        console.log(data);
    }

    logError(data: any) {
        console.error(data);
    }
}
