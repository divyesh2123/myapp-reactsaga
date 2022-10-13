
import { put, takeEvery, delay, takeLatest, takeLeading } from 'redux-saga/effects'
import { DecrementAction, IncrementAction } from '../action/counterAction'


export function* incrementAsync() {
    yield delay(1000)
    yield put(IncrementAction())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchIncrementAsync() {
    yield takeLeading('INCREMENT_ASYNC', incrementAsync)
  }

  export function* decrementAsync() {
    yield delay(1000)
    yield put(DecrementAction())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchDecrementAsync() {
    yield takeLeading('DCREMENT_ASYNC', decrementAsync)
  }



  