import axios from 'axios';

const initialOrderState = {
	allOrders: [],
	singleOrder: {
		orderId: '',
		orderTotal: '',
		items: []
		// product: {
		// 	lineitemId: '' ==> should exist in items
		// }
	},
}

//reducer
const orderReducer = (state=initialOrderState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_ORDERS:
      return (newState.allOrders = action.orders);
    case GET_SINGLE_ORDER:
      newState.singleOrder.orderTotal = action.order.price
      newState.singleOrder.items = action.order.lineitems
      newState.singleOrder.orderId = action.order.id
      return newState;

    default:
      return state;
  }

  return state;
};

//Single order
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';
export const singleOrder = (order) => ({
	type: GET_SINGLE_ORDER, order
});

//add axios calls  ==> get axios calls working
export const getSingleOrder = (orderId) => {
	return dispatch => {
		axios.get(`/api/orders/${orderId}`)
		.then(res => {
			dispatch(singleOrder(res.data)) 
		})
	}
}

//All Orders
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
export const allOrders = orders => ({
	type: GET_ALL_ORDERS, orders,
});

//add axios calls
export const getAllOrders = () => {
	// console.log('called allOrders') //working
	return dispatch => {
		 axios.get('/api/orders')
		.then(res => {			
			dispatch(allOrders(res.data)) })
	}
}


//Create Order
const CREATE_ORDER = 'CREATE_ORDER';
export const newOrder = () => {
	return {
		type: CREATE_ORDER,
		products
	} 
};

//add axios calls
export const createOrder = () => {
	return dispatch => {
		axios.post('/api/order/')
		.then(res => {
			dispatch(newOrder(res.data)) 
		})
	}
}

export default orderReducer;


