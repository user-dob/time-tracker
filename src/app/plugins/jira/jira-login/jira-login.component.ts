import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-jira-login',
    templateUrl: './jira-login.component.html',
    styleUrls: ['./jira-login.component.styl']
})
export class JiraLoginComponent {
    
    domain: string;

    username: string;

    pasword: string;

    isLoading: boolean = false;

    constructor(private formBulider: FormBuilder) {

    }

    onSubmit() {
        this.isLoading = true;
    }

    

}
