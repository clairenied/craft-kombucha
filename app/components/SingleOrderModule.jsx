import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import SingleOrder from './SingleOrder'
import Product from './SingleProduct';
import Products from './Products'

const SingleOrderModule = (props) => {
  let order = props.order
  let lineItems = props.order.lineitems;
  const products = lineItems && lineItems.map(item => {
    return {product: item.product, quantity: item.quantity}
  })

  return (
    <div>
      <br/>
        { 
          products && Object.values(products).map((prod) => {   
          let product = prod.product 
          let quantity = prod.quantity;        
            return(
              <div className="row" key={product.id}>
                <div key={product.id}>
                    <div className="col-xs-12 col-sm-2">
                      <Link to={`/products/${product.id}`}>
                        <img src={product.photo} className="img-responsive"/>
                      </Link>
                    </div>
                    <div className="col-xs-12 col-sm-2">
                      <small>{product.producttype.name}</small>
                    </div>
                    <div className="col-xs-12 col-sm-2">
                      <small>{product.size}</small>
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
              </div>
            )
          })
        } 
      <br/>
    </div>
  )
}

export default SingleOrderModule;