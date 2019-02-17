import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LoggerService, NotificationService } from '@app/core/services';
import { JiraProjectService, IJiraProjectType, IJiraProjectCategory, IJiraProject } from '../services';

@Component({
    selector: 'app-jira-projects',
    templateUrl: './jira-projects.component.html',
    styleUrls: ['./jira-projects.component.styl']
})
export class JiraProjectsComponent implements OnInit {

    isLoading: boolean = false;

    displayedColumns: string[] = ['name', 'key'];

    dataSource: MatTableDataSource<IJiraProject> = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

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
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        try {
            this.isLoading = true;

            const [types, categories, projects] = await Promise.all([
                this.jiraProjectService.getTypes(),
                this.jiraProjectService.getCategories(),
                this.jiraProjectService.getProjects()
            ]);

            this.types = types;
            this.categories = categories;
            this.dataSource.data = projects;

        } catch (error) {
            this.notificationService.showError(error.message);
            this.loggerService.logError(error);
        } finally {
            this.isLoading = false;
        }
    }

    onSearch(value: string) {
        this.dataSource.filter = value.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
