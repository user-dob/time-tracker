import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JiraService } from '@plugins/jira';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private jiraService: JiraService
	) {}

	async ngOnInit() {
		await Promise.all([
			this.jiraService.onInit()
        ]);

        this.router.navigate(['/github/login']);
	}
}
