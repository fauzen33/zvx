

export enum LoadingState  {
	LOADED= 'LOADED',
	LOADING= 'LOADING',
	NEWER= 'NEWER',
	ERROR= 'ERROR',
}

export interface Post  {
	text: string;
	user: {
		fullname: string;
		avatarUrl: string;
		username: string;
	};
	
}

export interface PostsState  {
	items: Post[],
	loadingState: LoadingState,
}
