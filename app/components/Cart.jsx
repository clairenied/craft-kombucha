import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartModule from './CartModule';

const Cart = (props) => {
  return (
    <div>
      <div className="page-header col-xs-12">
        <h1>Cart</h1>
      </div>
      <CartModule/>
      <div className="row col-xs-12">
        <a href="#" className="btn btn-default">Check Out</a>
      </div>
    </div>
  )
}

export default Cart;