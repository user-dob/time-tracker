import { NgModule } from '@angular/core';
import { JiraService } from "@plugins/jira/jira.service";

@NgModule({
    providers: [
        JiraService
    ]
})
export class JiraModule {}