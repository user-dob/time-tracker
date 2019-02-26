import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGithubUser } from '../models';

@Injectable()
export class GithubConnectorService {

	private domain: string = 'api.github.com';

	private headers: HttpHeaders;

	constructor(
		private http: HttpClient
	) {}

	setBasicAuth(username: string, password: string, otp?: string) {
		this.headers = new HttpHeaders({
			'Content-type': 'application/json',
			'Authorization': 'Basic ' + window.btoa(`${username}:${password}`)
		});

		if (otp) {
			this.headers = this.headers.set('X-GitHub-OTP', otp);
		}
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

	async authorizations(params?: any) {
		return this.http
			.post<any>(`https://${this.domain}/authorizations`, params,{ headers: this.headers })
			.toPromise()
			.catch(response => {
				if (response.headers.get('X-GitHub-OTP')) {
					return Promise.reject({isTwoFactorAuthentication: true});
				}
				return response;
			})
	}

	async revoke(id: string) {
		return this.http.delete(`https://${this.domain}/authorizations/${id}`, {headers: this.headers}).toPromise();
	}

	async getUser(): Promise<IGithubUser> {
		return this.api(`user`);
	}
}
