import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { WebStorageModule } from 'ngx-store';

import { LoggerService, NotificationService } from './services';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        WebStorageModule
    ],
    exports: [
        CommonModule,
        MaterialModule
    ],
    providers: [
        LoggerService,
        NotificationService
    ]
})
export class CoreModule { }
