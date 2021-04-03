import { combineReducers } from 'redux';

import { cartReducer } from '../containers/Cart';

const rootReducer = combineReducers({
    cartReducer,
});

export default rootReducer;