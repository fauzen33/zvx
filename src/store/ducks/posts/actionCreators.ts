import { LoadingState, PostsState } from './contracts/state'
import { Action } from 'redux'

export enum PostsActionTypes {
	SET_POSTS = 'posts/SET_POSTS',
	FETCH_POSTS = 'posts/FETCH_POSTS',
	SET_LOADING_STATE = 'posts/SET_LOADING_STATE',
}

export interface setPostsActionInterface extends Action<PostsActionTypes> {
	type: PostsActionTypes.SET_POSTS
	payload: PostsState['items']
}

export interface setPostsLoadingStateInterface
	extends Action<PostsActionTypes> {
	type: PostsActionTypes.SET_LOADING_STATE
	payload: LoadingState
}

export interface FetchPostsActionInterface extends Action<PostsActionTypes> {
	type: PostsActionTypes.FETCH_POSTS
}

export const setPosts = (
	payload: PostsState['items']
): setPostsActionInterface => ({
	type: PostsActionTypes.SET_POSTS,
	payload,
})

export const setLoadingState = (
	payload: LoadingState
): setPostsLoadingStateInterface => ({
	type: PostsActionTypes.SET_LOADING_STATE,
	payload,
})

export const fetchPosts = (): FetchPostsActionInterface => ({
	type: PostsActionTypes.FETCH_POSTS,
})

export type PostActions =
	| setPostsActionInterface
	| setPostsLoadingStateInterface
	| FetchPostsActionInterface
