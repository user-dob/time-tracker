import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { LoggerService, NotificationService } from '@app/core/services';
import { GithubLoginService } from '../services';

@Component({
	selector: 'app-github-login',
	templateUrl: './github-login.component.html',
	styleUrls: ['./github-login.component.styl']
})
export class GithubLoginComponent implements OnInit {

	isLoading: boolean = false;

	form: FormGroup;

	constructor(
		private formBulider: FormBuilder,
		private router: Router,
		private loggerService: LoggerService,
		private notificationService: NotificationService,
		private githubLoginService: GithubLoginService
	) {}

	ngOnInit() {
		this.buildForm();
	}

	buildForm() {
		this.form = this.formBulider.group({
			username: [this.githubLoginService.username, Validators.required],
			password: ['', Validators.required],
			code: ['']
		});
	}

	async onSubmit() {
		if (this.form.valid) {
			this.isLoading = true;

			try {
				await this.githubLoginService.login(this.form.value);
				//this.router.navigate(['/github/settings']);
			} catch (error) {
				this.notificationService.showError(error.message);
				this.loggerService.logError(error);
			} finally {
				this.isLoading = false;
			}
		}
	}
}
