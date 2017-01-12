import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import ProductModule from './ProductModule';

const Products = (props) => {
  const allProducts = props.products.allProducts

  return (
    <div>

      <div className="page-header col-xs-12">
        <h1>Categories</h1>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <Link to="/products-kombucha">
            <h2 className="text-center">Kombucha</h2>
          </Link>
          <img className="img-responsive" src="http://fsi.colostate.edu/wp-content/uploads/2015/03/freestylefarm.jpg"/>
        </div>
        <div className="col-xs-12 col-sm-4">
          <Link to="/products-merch">
            <h2 className="text-center">Merch</h2>
          </Link>
          <img className="img-responsive" src="https://www.mockupworld.co/wp-content/uploads/edd/2015/09/tshirt-mockup-free-1000x747.jpg"/>
        </div>
        <div className="col-xs-12 col-sm-4">
          <Link to="/products-mother">
            <h2 className="text-center">Mothers</h2>
          </Link>
          <img className="img-responsive" src="http://bonzaiaphrodite.com/wp-content/uploads/2010/05/IMG_2363.jpg"/>
        </div>
      </div>

  		<div className="page-header col-xs-12">
        <h1>Products</h1>
      </div>

      {allProducts.map((singleProduct, i) => {
        return (<ProductModule key={i} singleProduct={singleProduct}/>)
      })}
    </div>
  )
}

export default Products;

