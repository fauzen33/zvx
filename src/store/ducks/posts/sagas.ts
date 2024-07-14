import {call, put, takeEvery} from 'redux-saga/effects'
import { fetchPosts, PostsActionTypes, setLoadingState, setPosts } from './actionCreators';
import { PostsApi } from '../../../services/api/postsApi';
import { LoadingState } from './contracts/state';


export function* fetchPostsRequest(): Generator<any, void, any>  {
  try {
    const items = yield call(PostsApi.fetchPosts)
    yield put(setPosts(items))
    
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR))
  }

}

export function* watchPostsAsync() {
  yield takeEvery(PostsActionTypes.FETCH_POSTS, fetchPostsRequest)
}