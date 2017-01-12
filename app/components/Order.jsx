import React from 'react';
import store from '../store'
import {connect} from 'react-redux'
import {getSingleOrder, getAllOrders} from '../reducers/orders'; 
/*
  get product methods to load product info 
  import {getSingleOrder, getAllOrders} from '../reducers/orders'; 
*/

import OrderModule from './OrderModule';


// const Order = (props) => {
//   // console.log('store: ', store)
//   // console.log('order props: ', props)
//   return (
//     <div>
//       <div className="page-header col-xs-12">
//         <h1>Order</h1>
//       </div>
//       <OrderModule/>
//       <div className="row col-xs-12">
//         <a href="#" className="btn btn-default">Check Out</a>
//       </div>
//     </div>
//   )
// }

// export default Order;

//map dispatch to props
function mapStateToProps(state){
    // console.log('state: ', state)
    return {
        singleOrder: state.ordersReducer.singleOrder,
        allOrders: state.ordersReducer
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getSingleOrder: function(order){
            dispatch(getSingleOrder(order));
        }, 
        getAllOrders: function(){
          dispatch(getAllOrders())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderModule);