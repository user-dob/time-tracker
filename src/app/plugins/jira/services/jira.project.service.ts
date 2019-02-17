import { Injectable } from '@angular/core';
import { JiraLoginService } from './jira.login.service';

export interface IJiraProjectCategory {
    id: string,
    name: string,
    description: string,
    self: string
}

export interface IJiraProjectType {
    key: string,
    formattedKey: string,
    icon: string,
    color: string
}

export interface IJiraProject {
    id: string,
    key: string,
    name: string,
    avatarUrl: string,
    self: string,
    projectCategory: IJiraProjectCategory,
    projectTypeKey: string
}

@Injectable()
export class JiraProjectService {

    constructor(
        private jiraLoginService: JiraLoginService
    ) {}

    async getProjects() {
        const connector = await this.jiraLoginService.getConnector();
        const projects = await connector.getProjects();
    }

    async getTypes() {
        const connector = await this.jiraLoginService.getConnector();
        return <IJiraProjectType[]>await connector.getProjectsTypes();
    }

    async getCategories() {
        const connector = await this.jiraLoginService.getConnector();
        return <IJiraProjectCategory[]>await connector.getProjectsCategories();
    }
}