import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware()
    const middleWares = [sagaMiddleware]
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWares)))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore()
