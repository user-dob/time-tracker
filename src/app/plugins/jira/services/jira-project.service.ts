import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { JiraLoginService } from './jira-login.service';


@Injectable()
export class JiraProjectService {

    @LocalStorage() userProjectKeys: string[] = [];

    constructor(
        private jiraLoginService: JiraLoginService
    ) {}

    async getProjects() {
        return this.jiraLoginService.getConnector().getProjects();
    }

    async getTypes() {
        return this.jiraLoginService.getConnector().getProjectsTypes();
    }

    async getCategories() {
        return this.jiraLoginService.getConnector().getProjectsCategories();
    }
}