import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JiraModule } from '@plugins/jira/jira.module';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private jiraModule: JiraModule
	) {}


	async ngOnInit() {
		await Promise.all([
			this.jiraModule.onInit()
		]);

		this.router.navigate(['/jira/settings']);
	}	
}
