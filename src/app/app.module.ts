import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { JiraModule } from '@plugins/jira';
import { GithubModule } from '@plugins/github';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
        AppRoutingModule,
        JiraModule.forRoot(),
		GithubModule.forRoot()
    ],
	bootstrap: [AppComponent]
})
export class AppModule { }
