import { put, takeLatest } from 'redux-saga/effects';
import {users_list} from '../../utils/ExistingUsers';
import {
  loginUserSuccess,
  loginUserFailed,
} from './actions';
import {
  LOGIN_USER
} from './constants';

function* loginUserSaga({ payload }) {
    try {
        localStorage.setItem('user', JSON.stringify(payload)); 
        yield put(loginUserSuccess(payload));
    } catch (e) {
        yield put(loginUserFailed(e));
    }
}

const sagas = [
    takeLatest(`${LOGIN_USER}_PENDING`, loginUserSaga),
];
export default sagas;
