import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router'

import SingleOrderModule from './SingleOrderModule'

const SingleOrder = (props) => {
	const order = props.singleOrder;
	const lineItems = order.lineitems

	return (
		<div>
			<h2>Your Order</h2>
			<div className="row">
				<div>
					{ 
						lineItems && Object.values(lineItems).map((item, i) => {
	            			return (<SingleOrderModule key={i} order={item}/>)
            			})
					}
				</div>
		        <div className="col-xs-12 col-sm-2">
		          <a href="#" className="btn btn-default">Cancel Order</a>
		        </div>
	      	</div>
		</div>
	)
}

export default SingleOrder;