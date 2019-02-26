import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core/core.module';
import { GithubRoutingModule } from './github-routing.module';
import { GithubLoginService, GithubConnectorService, GithubKeytarService, GithubService } from './services';
import { GithubGuard } from './github.guard';
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
export class GithubModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: GithubModule,
			providers: [
				GithubLoginService,
				GithubConnectorService,
				GithubKeytarService,
				GithubService,
				GithubGuard
			]
		}
	}
}
