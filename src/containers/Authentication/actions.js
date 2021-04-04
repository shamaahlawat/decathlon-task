import {
  LOGIN_USER,
  LOGOUT_USER
} from './constants';

export const loginUser = payload => ({
    type: `${LOGIN_USER}_PENDING`,
    payload,
  })

  export const loginUserSuccess = payload => ({
    type: `${LOGIN_USER}_SUCCESS`,
    payload,
  })
  
  export const loginUserFailed = payload => ({
    type: `${LOGIN_USER}_FAILED`,
    payload,
  })

  export const logoutUser = payload => ({
    type: `${LOGOUT_USER}`,
    payload,
  })