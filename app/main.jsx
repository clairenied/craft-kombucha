import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import axios from 'axios';

import store from './store';


//Components
// import Jokes from './components/Jokes'
import Navbar from './components/Navbar'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SingleReviewContainer from './containers/SingleReviewContainer'
import ReviewsContainer from './containers/ReviewsContainer'
import Signup from './components/Signup'
import Order from './components/Order'
import Cart from './components/Cart'
import Admin from './components/Admin'

// Actions
import { fetchUsers } from './reducers/users';

// On-Enter Hooks
const adminOnEnter = (nextRouterState) => {
  store.dispatch(fetchUsers());
};


//Containers
import ProductsContainer from './containers/ProductsContainer'
import SingleProductContainer from './containers/SingleProductContainer'


//action creators
import { getAllProducts, getSingleProduct } from './reducers/products'
import { fetchSingleReview, fetchReviews } from './reducers/reviews'

const loadAllProducts = () => {
  return store.dispatch(getAllProducts()) 
}

const loadSingleProduct = (nextRouterState) => {
  const productId = nextRouterState.params.productId
  return store.dispatch(getSingleProduct(productId))
}

const loadSingleReview = (nextRouterState) => {
  const productId = nextRouterState.params.productId
  const reviewId = nextRouterState.params.reviewId
  return store.dispatch(fetchSingleReview(productId, reviewId))
}

const loadAllReviews = (nextRouterState) => {
  const productId = nextRouterState.params.productId
  return store.dispatch(fetchReviews(productId))
}

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
        <Route path="/products" component={ProductsContainer} onEnter={loadAllProducts} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={loadSingleProduct} />
        <Route path="/products/:productId/reviews" component={ReviewsContainer} onEnter={loadAllReviews} />
        <Route path="/order" component={Order} />
        <Route path="/single-review/:reviewId" component={SingleReviewContainer} onEnter={loadSingleReview}/>
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin" component={Admin} onEnter={adminOnEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
