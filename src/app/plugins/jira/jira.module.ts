import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { JiraRoutingModule } from '@plugins/jira/jira-routing.module';
import { JiraService } from "@plugins/jira/jira.service";
import { JiraLoginComponent } from '@plugins/jira/jira-login/jira-login.component';
import { JiraSettingsComponent } from '@plugins/jira/jira-settings/jira-settings.component';

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule,
        JiraRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    providers: [
        JiraService
    ],
    declarations: [
        JiraLoginComponent,
        JiraSettingsComponent
    ]
})
export class JiraModule {}