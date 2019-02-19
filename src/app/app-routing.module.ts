import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { JiraModule } from '@plugins/jira';

const routes: Routes = [
    { path: 'jira', loadChildren: () => JiraModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
