import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { LoggerService, NotificationService } from '@app/core/services';
import { JiraProjectService, IJiraProjectType, IJiraProjectCategory, IJiraProject } from '../services';

@Component({
    selector: 'app-jira-projects',
    templateUrl: './jira-projects.component.html',
    styleUrls: ['./jira-projects.component.styl']
})
export class JiraProjectsComponent implements OnInit {

    isLoading: boolean = false;

    displayedColumns: string[] = ['select', 'name', 'key', 'category'];

    dataSource: MatTableDataSource<IJiraProject> = new MatTableDataSource();

    selection = new SelectionModel<IJiraProject>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    types: IJiraProjectType[];

    projectTypeKey: string = null;

    categories: IJiraProjectCategory[];

    category: string = null;

    projects: IJiraProject[];

    constructor(
        private loggerService: LoggerService,
        private notificationService: NotificationService,
        private jiraProjectService: JiraProjectService
    ) { }

    ngOnInit() {
        this.onLoadProjects();
    }

    onSave() {
        this.jiraProjectService.userProjectKeys = this.selection.selected.map(item => item.key);
        this.notificationService.showSuccess('Settings have been saved.');
    }

    async onLoadProjects() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.paginator.firstPage();
        this.category = null;
        this.projectTypeKey = null;

        try {
            this.isLoading = true;

            const [types, categories, projects] = await Promise.all([
                this.jiraProjectService.getTypes(),
                this.jiraProjectService.getCategories(),
                this.jiraProjectService.getProjects()
            ]);

            const userProjectKeysSet = new Set(this.jiraProjectService.userProjectKeys);
            const selectProjects = projects.filter(item => userProjectKeysSet.has(item.key));

            this.types = types;
            this.categories = categories;
            this.projects = projects;

            this.dataSource.data = this.projects;
            this.selection.select(...selectProjects);

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

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    onFilter() {
        this.dataSource.data = this.projects.filter(item => {
            const isType = !this.projectTypeKey || item.projectTypeKey === this.projectTypeKey;
            const isCategoty = !this.category || item.projectCategory && item.projectCategory.id === this.category; 

            return isType && isCategoty;
        });
    }
}
