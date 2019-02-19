import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core/core.module';
import { JiraRoutingModule } from './jira-routing.module';
import { JiraConnectorService, JiraKeytarService, JiraLoginService, JiraProjectService, JiraService } from "./services";
import { JiraGuard } from "./jira.guard";
import { JiraLoginComponent } from './jira-login/jira-login.component';
import { JiraSettingsComponent } from './jira-settings/jira-settings.component';
import { JiraProjectsComponent } from './jira-projects/jira-projects.component';
import { FooterRowOutlet } from '@angular/cdk/table';

@NgModule({
    imports: [
        CoreModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        JiraRoutingModule
    ],
    declarations: [
        JiraLoginComponent,
        JiraSettingsComponent,
        JiraProjectsComponent
    ]
})
export class JiraModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: JiraModule,
            providers: [
                JiraLoginService,
                JiraConnectorService,
                JiraKeytarService,
                JiraProjectService,
                JiraService,
                JiraGuard
            ]
        }
    }
}