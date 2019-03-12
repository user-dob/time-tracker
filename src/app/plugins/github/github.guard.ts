import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GithubLoginService } from './services';

@Injectable()
export class GithubGuard implements CanActivate {
    constructor(
        private router: Router,
        private githubLoginService: GithubLoginService
    ) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.githubLoginService.isAuthenticated()) {
            return true
        }
        this.router.navigate(['/github/login']);
        return false
    }
}