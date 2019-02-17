import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { WebStorageModule } from 'ngx-store';

import { LoggerService } from './services/logger.service';
import { NotificationService } from './services/notification.service';

@NgModule({
    imports: [
        CommonModule,
        MatSnackBarModule,
        WebStorageModule
    ],
    providers: [
        LoggerService,
        NotificationService
    ]
})
export class CoreModule { }
