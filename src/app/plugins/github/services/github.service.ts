import { Injectable } from '@angular/core';
import { GithubLoginService } from './github-login.service';

@Injectable()
export class GithubService {

    constructor(
        private githubLoginService: GithubLoginService
    ) {}

    async onInit() {
        return this.githubLoginService.onInitAuthenticated();
    }
}