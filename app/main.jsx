import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import axios from 'axios';
import store from './store';

// Components
import Navbar from './components/Navbar';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import SingleReviewContainer from './containers/SingleReviewContainer';
import ReviewsContainer from './containers/ReviewsContainer';
import Signup from './components/Signup';
import Orders from './components/Orders';
import SingleOrder from './components/SingleOrder';
import Admin from './components/Admin';
import NewReview from './components/NewReview'

// Containers
import ProductsContainer from './containers/ProductsContainer';
import SingleProductContainer from './containers/SingleProductContainer';
import CreateProductContainer from './containers/CreateProductContainer';
import UpdateProductContainer from './containers/UpdateProductContainer';
import OrdersContainer from './containers/OrdersContainer';
import SingleOrderContainer from './containers/SingleOrderContainer';
import NewReviewContainer from './containers/NewReviewContainer';

// Actions
import { fetchUsers } from './reducers/users';
import { getAllProducts, getSingleProduct, getAllProductsKombucha, getAllProductsMerch, getAllProductsMother } from './reducers/products'
import { getAllOrders, getSingleOrder } from './reducers/orders';
import { fetchSingleReview, fetchReviews } from './reducers/reviews';

// On-Enter Hooks
const adminOnEnter = (nextRouterState) => {
  store.dispatch(fetchUsers());
};

const onOrdersEnter = () => {
  return store.dispatch(getAllOrders())
};

const onSingleOrderEnter = function(nextRouterState) {
  const orderId = nextRouterState.params.orderId;
  return store.dispatch(getSingleOrder(orderId));
};

const loadAllProducts = () => {
  return store.dispatch(getAllProducts());
};

const loadAllProductsKombucha = () => {
  return store.dispatch(getAllProductsKombucha()) 
}

const loadAllProductsMerch = () => {
  return store.dispatch(getAllProductsMerch()) 
}

const loadAllProductsMother = () => {
  return store.dispatch(getAllProductsMother()) 
}

const loadSingleProduct = (nextRouterState) => {
  // console.log(nextRouterState)
  const productId = nextRouterState.params.productId
  store.dispatch(getSingleProduct(productId))
  store.dispatch(fetchReviews(productId))
}

const loadSingleReview = (nextRouterState) => {
  const reviewId = nextRouterState.params.reviewId;
  return store.dispatch(fetchSingleReview(reviewId));
};

const loadAllReviews = (nextRouterState) => {
  const productId = nextRouterState.params.productId;
  return store.dispatch(fetchReviews(productId));
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
        <Route path="/signup" component={Signup} />

        <Route path="/orders" component={OrdersContainer} onEnter={onOrdersEnter}/>
        <Route path="/orders/:orderId" component={SingleOrderContainer} onEnter={onSingleOrderEnter}/>

        <Route path="/products-kombucha" component={ProductsContainer} onEnter={loadAllProductsKombucha} />
        <Route path="/products-merch" component={ProductsContainer} onEnter={loadAllProductsMerch} />
        <Route path="/products-mother" component={ProductsContainer} onEnter={loadAllProductsMother} />

        <Route path="/products-create" component={CreateProductContainer} />
        <Route path="/products/:productId/update" component={UpdateProductContainer} onEnter={loadSingleProduct}/>
            
        <Route path="/products" component={ProductsContainer} onEnter={loadAllProducts} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={loadSingleProduct} />
        <Route path="/products/:productId/reviews" component={ReviewsContainer} onEnter={loadAllReviews} />
        <Route path="/products/:productId/new-review" component={NewReviewContainer} />

        <Route path="/reviews" component={ReviewsContainer} onEnter={loadAllReviews} />
        <Route path="/reviews/:reviewId" component={SingleReviewContainer} onEnter={loadSingleReview} />

        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} onEnter={adminOnEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);