import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IJiraUser, IJiraProject, IJiraProjectType, IJiraProjectCategory } from '../models';

@Injectable()
export class JiraConnectorService {

	private domain: string;

	private headers: HttpHeaders;

	constructor(
		private http: HttpClient
	) {}

	setDomain(domain: string) {
		this.domain = domain;
	}

	setBasicAuth(username: string, password: string) {
		this.headers = new HttpHeaders({
			'Content-type': 'application/json',
			'Authorization': 'Basic ' + window.btoa(`${username}:${password}`)
		});
	}

	setAccessToken(token: string) {
		this.headers = new HttpHeaders({
			'Content-type': 'application/json',
			'Authorization': `Bearer ${token}`
		});
	}

	logout() {
		this.domain = undefined;
		this.headers = null;
	}

	async api<T>(endPoint: string, params?: { [param: string]: string }) {
		return this.http.get<T>(`https://${this.domain}/rest/api/2/${endPoint}`, { headers: this.headers, params }).toPromise();
	}

	async getUser(username: string): Promise<IJiraUser> {
		return this.api(`user`, { username });
	}

	async getIssue(issueIdOrKey: string) {
		return this.api(`issue/${issueIdOrKey}`);
	}

	async getProjects(): Promise<IJiraProject[]> {
		return this.api(`project`);
	}

	async getProjectsCategories(): Promise<IJiraProjectCategory[]> {
		return this.api(`projectCategory`);
	}

	async getProjectsTypes(): Promise<IJiraProjectType[]> {
		return this.api(`project/type`);
	}
}
