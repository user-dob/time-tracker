import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { LoggerService, NotificationService } from '@app/core/services';
import {GithubReposService} from '../services';
import { IGithubRepo } from '../models';

@Component({
	selector: 'app-github-repos',
	templateUrl: './github-repos.component.html'
})
export class GithubReposComponent implements OnInit {

	isLoading: boolean = false;

	displayedColumns: string[] = ['select', 'name', 'owner'];

	dataSource: MatTableDataSource<IGithubRepo> = new MatTableDataSource();

	selection = new SelectionModel<string>(true, []);

	@ViewChild(MatPaginator) paginator: MatPaginator;

	@ViewChild(MatSort) sort: MatSort;

	repos: IGithubRepo[] = [];

	selectedRepos: IGithubRepo[] = [];

	constructor(
		private githubReposService: GithubReposService,
		private loggerService: LoggerService,
		private notificationService: NotificationService
	) {}

	async ngOnInit() {
		this.onLoadRepos();
	}

	async onLoadRepos() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.paginator.firstPage();

		try {
			this.isLoading = true;

			this.repos = await this.githubReposService.getRepos();

			this.dataSource.data = this.repos;
			this.selection.select(...this.githubReposService.selectedRepos.map(item => item.id));

		} catch (error) {
			this.notificationService.showError(error.message);
			this.loggerService.logError(error);
		} finally {
			this.isLoading = false;
		}
	}

	onSave() {
		this.githubReposService.selectedRepos = this.repos.filter(item => this.selection.isSelected(item.id));
		this.notificationService.showSuccess('Repos have been saved.');
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

	onMasterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach(row => this.selection.select(row.id));
	}
}
