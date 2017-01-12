import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router'

import SingleOrderModule from './SingleOrderModule'

const SingleOrder = (props) => {
	const order = props.singleOrder;
	const lineItems = order.lineitems
	const price = order.price

	return (
		<div>
			<h2>Your Order</h2>
			<br/>
		    <div className="row" >
		        <div className="col-xs-12 col-sm-2">
		          <medium>{}</medium>
		        </div>
		        <div className="col-xs-12 col-sm-2">
		          <medium>Product</medium>
		        </div>
		        <div className="col-xs-12 col-sm-2">
		          <medium>Size</medium>
		        </div>
		        <div className="col-xs-12 col-sm-2">
		          <medium>Price</medium>
		        </div>
		        <div className="col-xs-12 col-sm-2">
		           <medium>Quantity</medium>
		        </div>
		    </div>
		    <br/>
			<div className="row">
				<div>
					{ 
						lineItems && Object.values(lineItems).map((item, i) => {
	            			return (<SingleOrderModule key={i} order={item}/>)
            			})
					}
				</div>
				<br/>

				<div className="row">
				 <medium>Total: ${price}</medium>
				</div>
				<br/>

		        <div className="col-xs-12 col-sm-2">
		          <a href="#" className="btn btn-default">Cancel Order</a>
		        </div>
	      	</div>
		</div>
	)
}

export default SingleOrder;