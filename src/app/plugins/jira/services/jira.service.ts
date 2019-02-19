import { Injectable } from '@angular/core';
import { JiraLoginService } from './jira-login.service';

@Injectable()
export class JiraService {

    constructor(
        private jiraLoginService: JiraLoginService
    ) {}

    async onInit() {
        return this.jiraLoginService.onInitAuthenticated();
    }
}