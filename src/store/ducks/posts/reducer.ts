import { Draft, produce } from 'immer'
import { LoadingState, PostsState } from './contracts/state'
import { PostActions, PostsActionTypes } from './actionCreators'

const initialPostsState: PostsState = {
	items: [],
	loadingState: LoadingState.NEWER,
}

export const postReducer = produce((draft: Draft<PostsState>, action: PostActions) => {

	switch (action.type) {
		case PostsActionTypes.SET_POSTS: {
			draft.items = action.payload
			draft.loadingState = LoadingState.LOADED;

			break;
		}
		case PostsActionTypes.SET_LOADING_STATE: {
			draft.loadingState = action.payload
			break;
		}
	}


},
initialPostsState);
