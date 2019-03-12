import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core/core.module';
import { GithubRoutingModule } from './github-routing.module';
import { GithubLoginService, GithubConnectorService, GithubKeytarService, GithubService, GithubReposService } from './services';
import { GithubGuard } from './github.guard';
import { GithubLoginComponent } from './github-login/github-login.component';
import { GithubSettingsComponent } from './github-settings/github-settings.component';
import { GithubReposComponent } from './github-repos/github-repos.component';

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
        GithubSettingsComponent,
        GithubReposComponent
    ]
})
export class GithubModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: GithubModule,
			providers: [
				GithubReposService,
				GithubLoginService,
				GithubConnectorService,
				GithubKeytarService,
				GithubService,
				GithubGuard
			]
		}
	}
}
