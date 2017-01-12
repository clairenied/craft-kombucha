import axios from 'axios';

const initialOrderState = {
	singleOrder: {},
	allOrders: []
}

//reducer
const orderReducer = (state=initialOrderState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_ORDERS:
      return (newState.allOrders = action.orders);

    case GET_SINGLE_ORDER:
      return (newState.singleOrder = action.order);

    default:
      return state;
  }

  return state;
};

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

export default orderReducer;
// //Create Order
// const CREATE_ORDER = 'CREATE_ORDER';
// export const newOrder = () => {
// 	return {
// 		type: CREATE_ORDER,
// 		products
// 	} 
// };

// //add axios calls
// export const createOrder = () => {
// 	return dispatch => {
// 		return axios.post('/api/order/')
// 		.then(res => {
// 			dispatch(newOrder(res.data)) 
// 		})
// 	}
// }


//Add product to order ===> need to fetch line items
//then set orderId of line item
// const ADD_PRODUCT = 'ADD_PRODUCT';
// export const fillOrder = (orderId, product) => {
// 	return {
// 		type: ADD_PRODUCT,
// 		orderId, product
// 	} 
// };
// //add axios calls
// export const fillOrder = (product) => {
// 	return dispatch => {
// 		return axios.post(`/api/order/${orderId}`, orderId: )
// 		.then(res => {
// 			dispatch(fillOrder(res.data)) 
// 		})
// 	}
// }
