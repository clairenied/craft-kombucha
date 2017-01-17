import axios from 'axios';

const initialState =  {}

//reducer
const orderReducer = (state= initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_SINGLE_ORDER:
      newState[action.order.id] = action.order
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

export const getSingleOrder = (orderId) => {
	return (dispatch, getState) => {
		axios.get(`/api/orders/${orderId}`)
		.then(res => {
			const order = res.data;
			dispatch(singleOrder(order))
		})
	}
}

//add axios calls
export const getAllOrders = () => {
	return dispatch => {
		 axios.get('/api/orders')
		.then(res => {	
			const orders = res.data
			orders.forEach( order => {
				dispatch(singleOrder(order))
			})
		})
	}
}


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
// 		axios.post('/api/order/')
// 		.then(res => {
// 			dispatch(newOrder(res.data)) 
// 		})
// 	}
// }

export default orderReducer;

