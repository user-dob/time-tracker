import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JiraModel } from './jira.model';

@Injectable()
export class JiraGuard implements CanActivate {
    constructor(
        private router: Router,
        private jiraModel: JiraModel
    ) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthenticated = await this.jiraModel.isAuthenticated();
        if (isAuthenticated) {
            return true
        }
        this.router.navigate(['/jira/login']);
        return false
    }
}