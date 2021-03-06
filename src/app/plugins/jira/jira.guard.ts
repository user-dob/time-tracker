import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JiraLoginService } from './services';

@Injectable()
export class JiraGuard implements CanActivate {
    constructor(
        private router: Router,
        private jiraLoginService: JiraLoginService
    ) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.jiraLoginService.isAuthenticated()) {
            return true
        }
        this.router.navigate(['/jira/login']);
        return false
    }
}