import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {
    constructor(
        private snackBar: MatSnackBar
    ) {}

    showError(message: string, duration: number = 5000) {
        this.snackBar.open(message, null, {
            panelClass: 'mat-snack-bar-container--error',
            horizontalPosition: 'left',
            duration
        });
    }
}