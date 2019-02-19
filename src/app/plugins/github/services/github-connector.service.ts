import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GithubConnectorService {

	private domain: string = 'api.github.com';

	private headers: HttpHeaders;

	constructor(
		private http: HttpClient
	) {}

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
		return this.http.get<T>(`https://${this.domain}/${endPoint}`, { headers: this.headers, params }).toPromise();
	}

	async getUser(): Promise<any> {
		return this.api(`user`);
	}
}
