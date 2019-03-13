import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { JiraLoginService } from './jira-login.service';
import { IJiraProject } from '../models';

@Injectable()
export class JiraProjectService {

    @LocalStorage('JiraProjectService.selectedProjects')
	selectedProjects: IJiraProject[] = [];

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