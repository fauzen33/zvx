import { Draft, produce } from 'immer'
import { LoadingState, PostsState } from './contracts/state'
import { PostActions, PostsActionTypes } from './actionCreators'

const initialPostsState: PostsState = {
	items: [],
	loadingState: LoadingState.NEWER,
}

export const postReducer = produce((draft: Draft<PostsState>, action: PostActions) => {

  const {type, payload} = action;

  if (type === PostsActionTypes.SET_POSTS) {
		draft.items = payload;
		draft.loadingState = LoadingState.LOADED;
	}
	 if (type === PostsActionTypes.SET_LOADING_STATE) {
			draft.loadingState = action.payload
		}


},
initialPostsState);
