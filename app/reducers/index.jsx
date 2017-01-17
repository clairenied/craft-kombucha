import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products.jsx').default,
  reviews: require('./reviews').default,
  orders: require('./orders.js').default,
  users: require('./users').default,
  errors: require('./errors').default,
  productUpdateForm: require('./productUpdateForm').default,
});

export default rootReducer;
