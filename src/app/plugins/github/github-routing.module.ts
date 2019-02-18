import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubLoginComponent } from './github-login/github-login.component';
import { GithubSettingsComponent } from './github-settings/github-settings.component';

const routes: Routes = [
    { path: 'login', component: GithubLoginComponent },
    { path: 'settings', component: GithubSettingsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class GithubRoutingModule {}
