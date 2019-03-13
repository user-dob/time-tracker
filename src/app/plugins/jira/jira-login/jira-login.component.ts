import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoggerService, NotificationService } from '@app/core/services';
import { JiraLoginService } from '../services';

@Component({
    selector: 'app-jira-login',
    templateUrl: './jira-login.component.html'
})
export class JiraLoginComponent implements OnInit {

    isLoading: boolean = false;

    form: FormGroup;

    constructor(
        private formBulider: FormBuilder,
        private router: Router,
        private loggerService: LoggerService,
        private notificationService: NotificationService,
        private jiraLoginService: JiraLoginService
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBulider.group({
            domain: [this.jiraLoginService.domain, Validators.required],
            username: [this.jiraLoginService.username, Validators.required],
            password: ['', Validators.required]
        }); 
    }

    async onSubmit() {
        if (this.form.valid) {
            this.isLoading = true;

            try {
                await this.jiraLoginService.login(this.form.value);
                this.router.navigate(['/jira/settings']);
            } catch (error) {
                this.notificationService.showError(error.message);
                this.loggerService.logError(error);
            } finally {
                this.isLoading = false;
            }
        }
    }
}
