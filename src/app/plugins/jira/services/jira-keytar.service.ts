import { KeytarService } from '@app/core/services';

export class JiraKeytarService extends KeytarService {

    get service(): string {
        return 'electron-time-tracker-jira'
    }
}