import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: 'jira', loadChildren: '@plugins/jira/jira.module#JiraModule' },
    { path: '', redirectTo: '/jira/settings', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
