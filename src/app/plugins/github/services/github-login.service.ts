import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { GithubConnectorService } from './github-connector.service';
import { GithubKeytarService } from './github-keytar.service';
import { IGithubUser } from '../models';

@Injectable()
export class GithubLoginService {

	@LocalStorage('github-username') username: string;

	private token: string;

	@LocalStorage('github-user') user: IGithubUser;

	constructor(
		private githubConnectorService: GithubConnectorService,
		private githubKeytarService: GithubKeytarService
	) {}

	async onInitAuthenticated() {
		if (this.username) {
			this.token = await this.githubKeytarService.getPassword(this.username);
		}
	}

	isAuthenticated() {
		return Boolean(this.token);
	}

	getConnector() {
		this.githubConnectorService.setAccessToken(this.token);
		return this.githubConnectorService;
	}

	async login(data: {username: string, password: string, code?: string}) {
		this.githubConnectorService.setBasicAuth(data.username, data.password, data.code);
		const responce: any = await this.githubConnectorService.authorizations({scopes: ['user','repo'], note: 'TimeTracker'});
		if (responce.token) {
			this.username = data.username;
			this.token = responce.token;
			this.user = await this.getConnector().getUser();

			await this.githubKeytarService.setPassword(this.username, this.token);
		} else {
			return Promise.reject(responce);
		}
	}

}