import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { JiraConnectorService } from './jira.connector.service';
import { JiraKeytarService } from './jira.keytar.service';

export interface IJiraUser {
    displayName: string,
    avatarUrl: string,
    emailAddress: string
}

@Injectable()
export class JiraLoginService {

    constructor(
        private jiraConnectorService: JiraConnectorService,
        private jiraKeytarService: JiraKeytarService
    ) {}

    @LocalStorage() domain: string;

    @LocalStorage() username: string;

    private password: string;

    @LocalStorage() user: IJiraUser;

    async getPassword() {
        if (this.username && !this.password) {
            this.password = await this.jiraKeytarService.getPassword(this.username);
        }        
        return this.password;
    }
    
    async isAuthenticated() {
        const password = await this.getPassword();
        return Boolean(this.domain) && Boolean(this.username) && Boolean(password);
    }

    async getConnector() {
        const password = await this.getPassword();
        this.jiraConnectorService.setDomain(this.domain);
        this.jiraConnectorService.setBasicAuth(this.username, password);

        return this.jiraConnectorService;
    }

    async login(data: {domain: string, username: string, password: string}) {
        this.domain = data.domain;
        this.username = data.username;
        this.password = data.password;

        const connector = await this.getConnector();
        const responce: any = await connector.getUser(this.username);
        
        this.user = {
            displayName: responce.displayName,
            emailAddress: responce.emailAddress,
            avatarUrl: responce.avatarUrls['16x16']
        }

        await this.jiraKeytarService.setPassword(this.username, this.password);
    }

    async logout() {
        this.domain = '';
        this.username = '';
        this.password = '';
        this.user = null;

        this.jiraConnectorService.logout();

        await this.jiraKeytarService.deletePassword(this.username);
    }
}