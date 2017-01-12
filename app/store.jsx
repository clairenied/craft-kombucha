import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from './reducers' //is this real???
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {whoami} from './reducers/auth'
import ordersReducer from './reducers/orders'

const allReducers = combineReducers({
	whoami, 
	ordersReducer
})

const store = createStore(allReducers, applyMiddleware(createLogger({collapsed: true}), thunkMiddleware))

export default store;

// Set the auth info at start
// store.dispatch(whoami()) 
// store.dispatch(ordersReducer()) 
