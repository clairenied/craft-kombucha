//Constants
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';

//Get All orders
//create all orders reducer
export const getAllOrders = orders => {
	type: GET_ALL_ORDERS,
	orders
}
//add axios calls

//Get Single order
//create single order reducer
export const getSingleOrder = order => {
	type: GET_SINGLE_Order,
	order
}
//add axios calls