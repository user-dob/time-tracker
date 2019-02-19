import * as keytar from 'keytar';

export abstract class KeytarService {

    abstract get service(): string;

    async getPassword(account: string): Promise<string> {
        return keytar.getPassword(this.service, account);
    }

    async setPassword(account: string, password: string) {
        return keytar.setPassword(this.service, account, password);
    }

    async deletePassword(account: string) {
        return keytar.deletePassword(this.service, account);
    }
}