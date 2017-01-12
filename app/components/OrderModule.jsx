import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import Product from './SingleProduct';
import Products from './Products'

const OrderModule = (props) => {

  let order = props.order;
  let orderId = order.id;
  let price = order.lineItemPrice;
  let datePlaced = order.orderPlacedDate;
  let status = order.status;
  let payment = order.paymentMethod;
  let shipping = order.shippingMethod;

  /*TO DO: 
    - convert address id's (need to import address mod)
    - get image, product name from products/single product
  */

  return (
    <div>
      <div className="row" >
        <Link to={`/orders/${orderId}`}>
          <div className="col-xs-12 col-sm-2">
            <small>Order #{orderId}</small>
            {/*insert product name and image*/}
          </div>
          <div className="col-xs-12 col-sm-2">
            <small>{order.lineItemPrice}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
            <small>{order.orderPlacedDate}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
             <small>{order.status}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
             <small>{order.paymentMethod}</small>
          </div>
        </Link>
        <div className="col-xs-12 col-sm-2">
          <a href="#" className="btn btn-default">Delete</a>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default OrderModule;

//for products
// </div>
//       <br/>
//       <div className="col-xs-6 col-sm-2">
//         <Link to="/single-product">
//           <img src="http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png" className="img-responsive"/>
//         </Link>
//       </div>
//       <div className="col-xs-12 col-sm-10">
//         <h4>Product name</h4>    
//         <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//         <a href="#" className="btn btn-default">Delete</a>
//       </div>


