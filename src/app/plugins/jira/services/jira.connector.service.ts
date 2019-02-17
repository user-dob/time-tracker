import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JiraConnectorService {

    private domain: string;

    private username: string;

    private password: string;

    private get headers() {
        return new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'Basic ' + window.btoa(`${this.username}:${this.password}`)
        });
    }

    constructor(
        private http: HttpClient
    ) {}    

    setDomain(domain: string) {
        this.domain = domain;
    }

    setBasicAuth(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    async getUser(username: string) {
        return this.api(`user`, {username});
    }

    async getIssue(issueIdOrKey: string) {
        return this.api(`issue/${issueIdOrKey}`);
    }

    async getAllProjects() {
        return this.api(`project`);
    }

    async api(endPoint: string, params?: {[param: string]: string}) {
        return this.http.get(`https://${this.domain}/rest/api/2/${endPoint}`, {headers: this.headers, params}).toPromise();
    }
    
}