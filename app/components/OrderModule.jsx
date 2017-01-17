import React from 'react';
import { Link } from 'react-router'

const OrderModule = (props) => {

  let order = props.order;
  let orderId = order.id;
  let price = order.lineItemPrice;
  let datePlaced = order.orderPlacedDate;
  let status = order.status;
  let payment = order.paymentMethod;

  return (
    <div>
      <div className="row" >
        <Link to={`/orders/${orderId}`}>
          <div className="col-xs-12 col-sm-2">
            <small>Order #{orderId}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
            <small>{price}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
            <small>{datePlaced}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
             <small>{status}</small>
          </div>
          <div className="col-xs-12 col-sm-2">
             <small>{payment}</small>
          </div>
        </Link>
        <div className="col-xs-12 col-sm-2">
          <a href="#" className="btn btn-default">Cancel</a>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default OrderModule;
