import { createSelector } from 'reselect'
import { PostsState } from './contracts/state'
import { RootState } from './store'

export const selectPosts = (state: RootState): PostsState => state.posts

export const selectLoadingState = (state: RootState) =>
	selectPosts(state).loadingState
export const selectPostsItems = createSelector(
	selectPosts,
	(posts) => posts.items
)
