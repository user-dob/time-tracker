import {Directive, Input, HostListener, HostBinding} from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Directive({
	selector: '[uiHref]'
})
export class UiHrefDirective {

	@Input() uiHref: string;

	constructor(
		private electronService: ElectronService
	) {}

	@HostBinding('class') elementClass = 'ui-href';

	@HostListener('click') onClick() {
		this.electronService.shell.openExternal(this.uiHref);
	}

}
