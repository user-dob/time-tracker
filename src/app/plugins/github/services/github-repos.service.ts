import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { GithubLoginService } from './github-login.service';
import { IGithubRepo } from '../models';

@Injectable()
export class GithubReposService {

	@LocalStorage('GithubReposService.selectedRepos')
	selectedRepos: IGithubRepo[] = [];

	constructor(
		private githubLoginService: GithubLoginService
	) {}

	getRepos() {
		return this.githubLoginService.getConnector().getRepos();
	}
}