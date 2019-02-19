import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { GithubConnectorService } from './github-connector.service';

@Injectable()
export class GithubLoginService {

	@LocalStorage('github-username') username: string;

	constructor(
		private githubConnectorService: GithubConnectorService
	) {}

	async login(data: {username: string, password: string, code?: string}) {

		this.githubConnectorService.setBasicAuth(data.username, data.password);
		this.githubConnectorService.getUser();

	}

}