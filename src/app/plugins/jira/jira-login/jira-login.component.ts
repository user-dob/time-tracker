import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoggerService } from '@app/core/services/logger.service';
import { NotificationService } from '@app/core/services/notification.service';
import { JiraModel } from '@plugins/jira/jira.model';

@Component({
    selector: 'app-jira-login',
    templateUrl: './jira-login.component.html',
    styleUrls: ['./jira-login.component.styl']
})
export class JiraLoginComponent implements OnInit {

    isLoading: boolean = false;

    form: FormGroup;

    constructor(
        private formBulider: FormBuilder,
        private router: Router,
        private loggerService: LoggerService,
        private notificationService: NotificationService,
        private jiraModel: JiraModel
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBulider.group({
            domain: [this.jiraModel.domain, Validators.required],
            username: [this.jiraModel.username, Validators.required],
            password: ['', Validators.required]
        }); 
    }

    async onSubmit() {
        if (this.form.valid) {
            this.isLoading = true;

            try {
                await this.jiraModel.login(this.form.value);
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
