import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { JiraModule } from '@plugins/jira';
import { GithubModule } from '@plugins/github';

const routes: Routes = [
    { path: 'jira', loadChildren: () => JiraModule },
    { path: 'github', loadChildren: () => GithubModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
