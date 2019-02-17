import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { CoreModule } from '@app/core/core.module';
import { JiraRoutingModule } from './jira-routing.module';
import { JiraModel } from "./jira.model";
import { JiraConnectorService, JiraKeytarService } from "./services";
import { JiraGuard } from "./jira.guard";
import { JiraLoginComponent } from './jira-login/jira-login.component';
import { JiraSettingsComponent } from './jira-settings/jira-settings.component';

@NgModule({
    imports: [
        CoreModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        JiraRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    providers: [
        JiraModel,
        JiraConnectorService,
        JiraKeytarService,
        JiraGuard
    ],
    declarations: [
        JiraLoginComponent,
        JiraSettingsComponent
    ]
})
export class JiraModule {}