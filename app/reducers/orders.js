import axios from 'axios';
import whoami from './auth'

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

export const addProductToOrder = (productId) => {
  return dispatch => {
    return axios.get(`/api/orders/list/${productId}`)
    .then( res => {
      //res returns the lineitem id
      // console.log('reducer res: ', res)
    })
  }
}

// Add product to order ===> need to fetch line items
// then set orderId of line item
// const ADD_PRODUCT = 'ADD_PRODUCT';
// export const fillOrder = (orderId, product) => {
// 	return {
// 		type: ADD_PRODUCT,
// 		orderId, product
// 	} 
// };
// //add axios calls
// export const fillOrder = (orderId, product) => {
// 	return dispatch => {
// 		axios.post(`/api/order/${orderId}`, 
// 			{orderId: orderId})
// 		.then(res => {
// 			dispatch(fillOrder(res.data)) 
// 		})
// 	}
// }

export default orderReducer;


