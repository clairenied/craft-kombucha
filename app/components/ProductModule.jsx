import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import SingleProduct from './SingleProduct';

const ProductModule = (props) => {
  const singleProduct = props.singleProduct
  return (
    <div className="row">
      <Link to={`/products/${singleProduct.id}`}>
        <div className="col-xs-12 col-sm-3">
          <img src={singleProduct.photo} className="img-responsive"/>
        </div>
        <div className="col-xs-12 col-sm-7">
          <h4>{singleProduct.producttype.name}</h4>
          <p>{singleProduct.producttype.description}</p>
        </div>
      </Link>
      <div className="col-xs-12 col-sm-2">
        <a href="#" className="btn btn-primary">${singleProduct.price}</a>
      </div>
    </div>
  )
}

export default ProductModule;