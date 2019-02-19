import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { JiraConnectorService } from './jira-connector.service';
import { JiraKeytarService } from './jira-keytar.service';
import { IJiraUser } from '../models';

@Injectable()
export class JiraLoginService {

    constructor(
        private jiraConnectorService: JiraConnectorService,
        private jiraKeytarService: JiraKeytarService
    ) {}

    @LocalStorage('jira-domain') domain: string;

    @LocalStorage('jira-username') username: string;

    private password: string;

    @LocalStorage('jira-user') user: IJiraUser;

    async onInitAuthenticated() {
    	if (this.username) {
			this.password = await this.jiraKeytarService.getPassword(this.username);
		}
    }

    isAuthenticated() {
        return Boolean(this.domain) && Boolean(this.username) && Boolean(this.password);
    }

    getConnector() {
        this.jiraConnectorService.setDomain(this.domain);
        this.jiraConnectorService.setBasicAuth(this.username, this.password);

        return this.jiraConnectorService;
    }

    async login(data: {domain: string, username: string, password: string}) {
        this.domain = data.domain;
        this.username = data.username;
        this.password = data.password;

        this.user = await this.getConnector().getUser(this.username);
        
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