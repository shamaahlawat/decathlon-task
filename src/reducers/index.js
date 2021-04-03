import { combineReducers } from 'redux';

import { cartReducer } from '../containers/Cart';
import { authenticationReducer } from '../containers/Authentication';

const rootReducer = combineReducers({
    cartReducer,
    authenticationReducer
});

export default rootReducer;