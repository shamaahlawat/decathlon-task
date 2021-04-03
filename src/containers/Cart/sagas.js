import { call,put, takeLatest } from 'redux-saga/effects';
import {
  fetchProductsListSuccess,
  fetchProductsListFailed,
} from './actions';
import {
  FETCH_PRODUCTS_LIST
} from './constants';

function* productListSaga({ payload }) {
    try {
        // const response = yield call(fetchProductList, payload) // use when calling api
        yield put(fetchProductsListSuccess());
    } catch (e) {
        yield put(fetchProductsListFailed(e));
    }
}

const sagas = [
    takeLatest(`${FETCH_PRODUCTS_LIST}_PENDING`, productListSaga),
];
export default sagas;
