import { KeytarService } from '@app/core/services';

export class GithubKeytarService extends KeytarService {

    get service(): string {
        return 'electron-time-tracker-github'
    }
}