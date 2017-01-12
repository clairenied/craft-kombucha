import axios from 'axios';

const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';

export const allOrders = orders => {
	type: GET_ALL_ORDERS,
	orders
}
export const getAllOrders = () => {
	return dispatch => {
		return axios.get('/api/order')
		.then(res => {
			console.log('order res: ', res)
			dispatch(allOrders(res.data)) })
	}
}

export const singleOrder = (order) => {
	type: GET_SINGLE_ORDER,
	order
}
//add axios calls
export const getSingleOrder = (orderId) => {
	return dispatch => {
		return axios.get(`/api/order/${orderId}`)
		.then(res => {
			console.log('single order res: ', res)
			dispatch(singleOrder(res.data)) 
		})
	}
}