'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

//Components
// import Jokes from './components/Jokes'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SingleProduct from './components/SingleProduct'
import SingleReview from './components/SingleReview'
import Signup from './components/Signup'
import Order from './components/Order'
import Admin from './components/Admin'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </div>
)

import axios from 'axios'
import {getAllOrders} from './reducers/orders';
const onOrdersEnter = function() {
  axios.get('/api/orders')
  .then( res => {
    store.dispatch(getAllOrders(res.data))
  })
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} />
        <Route path="/single-product" component={SingleProduct} />
        <Route path="/single-review" component={SingleReview} />
        <Route path="/signup" component={Signup} />

        <Route path="/orders" component={Order} 
               onEnter={onOrdersEnter}/>
               
        <Route path="/orders/:orderId" component={Order} />
        
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)