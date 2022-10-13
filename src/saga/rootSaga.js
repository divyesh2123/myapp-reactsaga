
import { put, takeEvery, takeLatest, delay, all, fork } from 'redux-saga/effects';
import { watchDecrementAsync, watchIncrementAsync } from '.';


export default function* rootSaga() {
  //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);

  yield all([watchIncrementAsync(),watchDecrementAsync()]);
  }