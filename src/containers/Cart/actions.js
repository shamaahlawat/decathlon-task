import {
  FETCH_PRODUCTS_LIST,
} from './constants';

export const fetchProductsList = payload => ({
    type: `${FETCH_PRODUCTS_LIST}_PENDING`,
    payload,
  })
  
  export const fetchProductsListSuccess = payload => ({
    type: `${FETCH_PRODUCTS_LIST}_SUCCESS`,
    payload,
  })
  
  export const fetchProductsListFailed = payload => ({
    type: `${FETCH_PRODUCTS_LIST}_FAILED`,
    payload,
  })
