import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

// Components
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import SingleProduct from './components/SingleProduct';
import SingleReview from './components/SingleReview';
import Signup from './components/Signup';
import Order from './components/Order';
import Cart from './components/Cart';
import Admin from './components/Admin';

// Actions
import { fetchUsers } from './reducers/users';

// On-Enter Hooks
const adminOnEnter = (nextRouterState) => {
  store.dispatch(fetchUsers());
};

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </div>
);

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} />
        <Route path="/single-product" component={SingleProduct} />
        <Route path="/order" component={Order} />
        <Route path="/single-review" component={SingleReview} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin" component={Admin} onEnter={adminOnEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
