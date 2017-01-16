import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import ProductModule from './ProductModule';

const Products = (props) => {
  const products = props.products

  return (
    <div>
      <div className="page-header col-xs-12">
        <h1>Categories</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <Link to="/products-kombucha">
              <h3>Kombucha</h3>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-3">
            <Link to="/products-merch">
              <h3>Merch</h3>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-3">
            <Link to="/products-mother">
              <h3>Mothers</h3>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-3">
            <Link to="/products">
              <h3>All</h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="page-header col-xs-12">
        <h1>Products</h1>
      </div>

      {products.map((singleProduct, i) => {
        return (<ProductModule key={i} singleProduct={singleProduct}/>)
      })}
    </div>
  )
}

export default Products;

