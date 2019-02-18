import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraGuard } from './jira.guard';
import { JiraLoginComponent } from './jira-login/jira-login.component';
import { JiraSettingsComponent } from './jira-settings/jira-settings.component';

const routes: Routes = [
    { path: 'login', component: JiraLoginComponent },
    { path: 'settings', component: JiraSettingsComponent, canActivate: [JiraGuard] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class JiraRoutingModule {}
