import { Component, OnInit } from '@angular/core';
import { LoggerService, NotificationService } from '@app/core/services';
import { JiraProjectService, IJiraProjectType, IJiraProjectCategory } from '../services';

@Component({
    selector: 'app-jira-projects',
    templateUrl: './jira-projects.component.html',
    styleUrls: ['./jira-projects.component.styl']
})
export class JiraProjectsComponent implements OnInit {

    isLoading: boolean = false;

    types: IJiraProjectType[];

    selectType: IJiraProjectType = null;

    categories: IJiraProjectCategory[];

    selectCategory: IJiraProjectCategory = null;

    constructor(
        private loggerService: LoggerService,
        private notificationService: NotificationService,
        private jiraProjectService: JiraProjectService
    ) { }

    async ngOnInit() {
        this.isLoading = true;

        try {
            const [types, categories] = await Promise.all([
                this.jiraProjectService.getTypes(),
                this.jiraProjectService.getCategories()
            ]);

            this.types = types;
            this.categories = categories;

        } catch (error) {
            this.notificationService.showError(error.message);
            this.loggerService.logError(error);
        } finally {
            this.isLoading = false;
        }
    }
}
