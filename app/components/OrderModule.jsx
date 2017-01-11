import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import Product from './SingleProduct';
import Products from './Products'

const OrderModule = (props) => {

  let orders = props.allOrders;
  let orderId = orders.id;

  /*TO DO: 
    - convert address id's (need to import address mod)
    - get image, product name from products/single product
  */

  return (
    <div>
      <div className="col-xs-12 col-sm-10" >
      {  orders && Object.values(orders).map( (order, orderId) => {
            return (           
              <div className='ordersList-singleOrder' key={orderId}>
                <div className="single-line">
                 <Link to={`/orders/${orderId}`}>
                  <small>Order #{orderId}</small>
                 </Link>
                  <ul>
                    <li>{order.lineItemPrice}</li>
                    <li>{order.orderPlacedDate}</li>
                    <li>{order.status}</li>
                    <li>{order.paymentMethod}</li>
                    <li>{/*insert product name and image*/}</li>
                  </ul>
                </div>
              </div>    
            )
         })
      }
      </div>
      <br/>
      <div className="col-xs-12 col-sm-10">
        <a href="#" className="btn btn-default">Delete</a>
      </div>
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