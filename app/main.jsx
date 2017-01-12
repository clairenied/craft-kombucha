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
import Orders from './components/Orders'
import Admin from './components/Admin'

//Containers
import ProductsContainer from './containers/ProductsContainer'
import SingleProductContainer from './containers/SingleProductContainer'
import OrdersContainer from './containers/OrdersContainer'
import SingleOrderContainer from './containers/SingleOrderContainer'

//Actions
import { fetchUsers } from './reducers/users';
import { getAllProducts, getSingleProduct, getAllProductsKombucha, getAllProductsMerch, getAllProductsMother } from './reducers/products'
import { getAllOrders } from './reducers/orders';

//On-Enter Hooks
const adminOnEnter = (nextRouterState) => {
  store.dispatch(fetchUsers());
};

//action creators
import { fetchSingleReview, fetchReviews } from './reducers/reviews'
const onOrdersEnter = function() {
  axios.get('/api/orders')
  .then( res => {
    store.dispatch(getAllOrders(res.data))
  })
}

const loadAllProducts = () => {
  return store.dispatch(getAllProducts()) 
}

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
  const productId = nextRouterState.params.productId
  return store.dispatch(getSingleProduct(productId))
}

const loadSingleReview = (nextRouterState) => {
  const productId = nextRouterState.params.productId
  const reviewId = nextRouterState.params.reviewId
  return store.dispatch(fetchSingleReview(productId, reviewId))
}

// const loadAllReviews = (nextRouterState) => {
//   const productId = nextRouterState.params.productId
//   return store.dispatch(fetchReviews(productId))
// }

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
        <Route path="/orders/:orderId" component={OrdersContainer} /> 

        <Route path="/products-kombucha" component={ProductsContainer} onEnter={loadAllProductsKombucha} />
        <Route path="/products-merch" component={ProductsContainer} onEnter={loadAllProductsMerch} />
        <Route path="/products-mother" component={ProductsContainer} onEnter={loadAllProductsMother} />
        
        <Route path="/products" component={ProductsContainer} onEnter={loadAllProducts} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={loadSingleProduct} />    

        <Route path="/signup" component={Signup} />
        <Route path="/admin" component={Admin} onEnter={adminOnEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
        // <Route path="/products/:productId/reviews" component={ReviewsContainer} onEnter={loadAllReviews} />
