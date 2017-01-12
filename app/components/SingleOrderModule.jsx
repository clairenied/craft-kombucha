import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import SingleOrder from './SingleOrder'
import Product from './SingleProduct';
import Products from './Products'

const SingleOrderModule = (props) => {
  
  let order = props.order;
  let quantity = order.quantity;
  let product = order.product;
  let productPhoto = product.photo;
  let productSize = product.size;
  let productName = product.producttype.name; 

  return (
    <div>
      <br/>
      <div className="row" >
        <Link to={`/products/${product.id}`}>
          <div className="col-xs-12 col-sm-2">
            <img src={productPhoto} className="img-responsive"/>
          </div>
        </Link>
        <div className="col-xs-12 col-sm-2">
          <small>{productName}</small>
        </div>
        <div className="col-xs-12 col-sm-2">
          <small>{productSize}</small>
        </div>
        <div className="col-xs-12 col-sm-2">
          <small>${product.basePrice}</small>
        </div>
        <div className="col-xs-12 col-sm-2">
           <small>{quantity}</small>
        </div>
        <div className="col-xs-12 col-sm-2">
          <a href="#" className="btn btn-default">Remove</a>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default SingleOrderModule;


 /*TO DO: 
    - convert address id's (need to import address mod)
    - get image, product name from products/single product
  */


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