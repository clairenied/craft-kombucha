import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

const OrderModule = (props) => {

  let order = props.order;
  let orderId = order.id;
  let price = order.lineItemPrice;
  let datePlaced = order.orderPlacedDate;
  let status = order.status;
  let payment = order.paymentMethod;
  let shipping = order.shippingMethod;

  return (
    <div>
      <div className="row" >
        <Link to={`/orders/${orderId}`}>
          <div className="col-xs-12 col-sm-2">
            <small>Order #{orderId}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
            <small>{order.lineItemPrice}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
            <small>{order.orderPlacedDate}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
             <small>{order.status}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
             <small>{order.paymentMethod}</small>
          </div>
        </Link>
        <div className="col-xs-12 col-sm-2">
          <a href="#" className="btn btn-default">Delete</a>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default OrderModule;
