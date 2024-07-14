import { all } from 'redux-saga/effects';
import { watchPostsAsync } from './ducks/posts/sagas'

export default function* rootSaga() {

  yield all([watchPostsAsync()]);
}

