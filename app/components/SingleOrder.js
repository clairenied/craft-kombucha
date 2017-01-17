import React from 'react';
import SingleOrderModule from './SingleOrderModule'

const SingleOrder = (props) => {
	const order = props.singleOrder;
	const items = order;
	const totalPrice = Object.values(order).map( order => {
		return order.price
	});

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
					order && Object.values(order).map((singleOrder, i) => {
            			return (<SingleOrderModule key={i} order={singleOrder}/>)
        			})
				} 
        		<br/>
			        <div className="col-xs-12 col-sm-2">
			         <medium>Total: ${totalPrice}</medium>
			        </div>
				</div>
				<br/>
				<br/>
				<div className="col-xs-12 col-sm-2">
        			<a href="#" className="btn btn-default">Check Out</a>
      			</div>
		        <div className="col-xs-12 col-sm-2">
		          <a href="#" className="btn btn-default">Cancel Order</a>
		        </div>
	      	</div>
		</div>
	)
}

export default SingleOrder;