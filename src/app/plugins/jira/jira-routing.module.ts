import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraLoginComponent } from '@plugins/jira/jira-login/jira-login.component';
import { JiraSettingsComponent } from '@plugins/jira/jira-settings/jira-settings.component';

const routes: Routes = [
    { path: 'login', component: JiraLoginComponent },
    { path: 'settings', component: JiraSettingsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class JiraRoutingModule {}
