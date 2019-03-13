import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JiraService } from '@plugins/jira';
import { GithubService } from '@plugins/github';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private jiraService: JiraService,
		private githubService: GithubService
	) {}

	async ngOnInit() {
		await Promise.all([
			this.jiraService.onInit(),
			this.githubService.onInit()
        ]);

        this.router.navigate(['/github/settings']);
	}
}
