import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

const CartModule = (props) => {
  return (
    <div>
      <div className="col-xs-6 col-sm-2">
        <Link to="/single-product">
          <img src="http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png" className="img-responsive"/>
        </Link>
      </div>
      <div className="col-xs-12 col-sm-10">
        <h4>Product name</h4>    
        <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" className="btn btn-default">Delete</a>
      </div>
    </div>
  )
}

export default CartModule;


