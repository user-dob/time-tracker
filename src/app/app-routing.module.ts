import { NgModule } from '@angular/core';
import { JiraModule } from '@plugins/jira/jira.module'; 
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: 'jira', loadChildren: () => JiraModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
