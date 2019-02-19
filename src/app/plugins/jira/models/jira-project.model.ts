import { IJiraProjectCategory } from './jira-project-category.model';

export interface IJiraProject {
    id: string,
    key: string,
    name: string,
    avatarUrls: {[size: string]: string},
    self: string,
    projectCategory: IJiraProjectCategory,
    projectTypeKey: string
}