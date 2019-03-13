import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {WebStorageModule} from 'ngx-store';
import { NgxElectronModule } from 'ngx-electron';

import {LoggerService, NotificationService} from './services';
import {UiHrefDirective} from './directives';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		WebStorageModule,
		NgxElectronModule
	],
	exports: [
		CommonModule,
		MaterialModule,
		UiHrefDirective
	],
	providers: [
		LoggerService,
		NotificationService
	],
	declarations: [
		UiHrefDirective
	]
})
export class CoreModule {
}
