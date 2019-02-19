import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core/core.module';
import { JiraRoutingModule } from './jira-routing.module';
import { JiraConnectorService, JiraKeytarService, JiraLoginService, JiraProjectService } from "./services";
import { JiraGuard } from "./jira.guard";
import { JiraLoginComponent } from './jira-login/jira-login.component';
import { JiraSettingsComponent } from './jira-settings/jira-settings.component';
import { JiraProjectsComponent } from './jira-projects/jira-projects.component';

@NgModule({
    imports: [
        CoreModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        JiraRoutingModule
    ],
    providers: [
        JiraLoginService,
        JiraConnectorService,
        JiraKeytarService,
        JiraProjectService,
        JiraGuard
    ],
    declarations: [
        JiraLoginComponent,
        JiraSettingsComponent,
        JiraProjectsComponent
    ]
})
export class JiraModule {
    constructor(
        private jiraLoginService: JiraLoginService
    ) {}

    async onInit() {
        return this.jiraLoginService.onInitAuthenticated();
    }
}