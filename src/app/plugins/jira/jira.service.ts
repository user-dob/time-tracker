import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JiraService {

    private domain: string;

    private headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

    constructor(private http: HttpClient) {
    }    

    setDomain(domain: string): void {
        this.domain = domain;
    }

    setBasicAuth(username: string, password: string): void {
        this.headers = this.headers.set('Authorization', 'Basic ' + window.btoa(`${username}:${password}`));
    }

    getIssue(issueIdOrKey: string) {
        return this.http.get(`https://${this.domain}/rest/api/2/issue/${issueIdOrKey}`, {headers: this.headers});
    }

    getAllProjects() {
        return this.http.get(`https://${this.domain}/rest/api/2/project`, {headers: this.headers});
    }
    
}