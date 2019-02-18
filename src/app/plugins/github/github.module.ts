import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core/core.module';
import { GithubRoutingModule } from './github-routing.module';
import { GithubLoginComponent } from './github-login/github-login.component';
import { GithubSettingsComponent } from './github-settings/github-settings.component';

@NgModule({
    imports: [
        CoreModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        GithubRoutingModule
    ],
    declarations: [
        GithubLoginComponent,
        GithubSettingsComponent
    ]
})
export class GithubModule { }
