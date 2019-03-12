export interface IGithubRepoOwner {
	id: string,
	login: string,
	type: string,
	avatar_url: string,
	html_url: string
}

export interface IGithubRepo {
	id: string,
	name: string,
	owner: IGithubRepoOwner,
	html_url: string
}