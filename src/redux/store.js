import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import ccReducer from './cc-reducer';

let reducers = combineReducers({
    cc: ccReducer
})

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;