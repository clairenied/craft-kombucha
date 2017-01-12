import React, {Component} from 'react';
import {connect} from 'react-redux';

import OrderModule from './OrderModule';

/*
  get product methods to load product info 
  import {getSingleOrder, getAllOrders} from '../reducers/orders'; 
*/

const Order = (props) => {
  
  const allOrders = props.allOrders;  
  return (
    <div>
      <div className="page-header col-xs-12">
        <h1>Orders</h1>
      </div>
      {
        allOrders && Object.values(allOrders).map((singleOrder, i) => {
            return (<OrderModule key={i} order={singleOrder}/>)
        })
      }
      <div className="row col-xs-12">
        <a href="#" className="btn btn-default">Check Out</a>
      </div>
    </div>
  )
}

export default Order;