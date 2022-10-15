
import { put, takeEvery, delay, takeLatest, takeLeading,call } from 'redux-saga/effects'
import { DecrementAction, IncrementAction } from '../action/counterAction'
import { GetUserDataAction,GetUserFailedAction } from '../action/userAction'
import { GET_USERS_REQ } from '../const';
import fetchGetUsers from './fetchGetUsers';


export function* GetUserData() {
   
    try {
        // console.log(call(fetchGetUsers))
         const users = yield call(fetchGetUsers);
     
     
        console.log(users)
         yield put( GetUserDataAction(users));
       } catch (err) {
         yield put( GetUserFailedAction(err) );
       }

  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchUserSaga() {
    yield takeLeading(GET_USERS_REQ, GetUserData)
  }



  