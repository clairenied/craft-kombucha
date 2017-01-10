import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleProduct from './SingleProduct';

const ProductModule = (props) => {
  return (
    <div className="col-xs-6 col-s-3 col-md-2 col-lg-2 col-xl-2">
      <img src="http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png" className="img-responsive"/>
      <h4>Card title</h4>
      <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  )
}

export default ProductModule;