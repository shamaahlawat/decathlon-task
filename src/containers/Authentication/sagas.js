import { call,put, takeLatest } from 'redux-saga/effects';
import {users_list} from '../../utils/ExistingUsers';
import {
  loginUserSuccess,
  loginUserFailed,
} from './actions';
import {
  LOGIN_USER
} from './constants';

function* loginUserSaga({ payload }) {
  let findIndex = users_list.findIndex((user) => user.email == payload.email)
    try {
      if(findIndex === -1){
        localStorage.removeItem('user'); 
        yield put(loginUserFailed());
      }
      else{
        localStorage.setItem('user', JSON.stringify(payload)); 
        yield put(loginUserSuccess(payload));
      }
    } catch (e) {
        yield put(loginUserFailed(e));
    }
}

const sagas = [
    takeLatest(`${LOGIN_USER}_PENDING`, loginUserSaga),
];
export default sagas;
