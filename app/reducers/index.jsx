import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products.jsx').default,
  reviews: require('./reviews').default,
  users: require('./users').default,
});

export default rootReducer;
