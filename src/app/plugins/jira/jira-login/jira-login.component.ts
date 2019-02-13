import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '@app/core/services/logger.service';

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
        private logger: LoggerService
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBulider.group({
            domain: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required]
        }); 
    }

    onSubmit() {
        if (this.form.valid) {
            this.isLoading = true;
            this.logger.log(this.form.value);
        }
    }

    

}
