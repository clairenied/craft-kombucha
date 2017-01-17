import axios from 'axios'

const initialState = {
  allProducts: [{
    photo: "",
    producttype: {
      category: "",
    }  
  }],
  singleProduct: {
    lineitem_id: '',
    producttype: {
      name: "",
      category: "",
      reviews: [{
        content: "",
        starRating: 0,
        created_at: "",
        user: {
          id: 0
        }
      }]
    }
  }
}

const reducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      nextState.allProducts = action.allProducts;
      break;
    case SET_SINGLE_PRODUCT:
      nextState.singleProduct = action.singleProduct;
      break;
    default:
      return state;
  }
  return nextState;
}

const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
export const setAllProducts = allProducts => ({
  type: SET_ALL_PRODUCTS, allProducts,
})

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
export const setSingleProduct = singleProduct => ({
  type: SET_SINGLE_PRODUCT, singleProduct
})

export const getAllProducts = () => 
  dispatch => 
    axios.get('/api/products/')
      .then( (res) => dispatch(setAllProducts(res.data)) )

export const getAllProductsKombucha = () => 
  dispatch => 
    axios.get('/api/products/kombucha')
      .then( (res) => dispatch(setAllProducts(res.data)) )

export const getAllProductsMerch = () => 
  dispatch => 
    axios.get('/api/products/merch')
      .then( (res) => dispatch(setAllProducts(res.data)) )

export const getAllProductsMother = () => 
  dispatch => 
    axios.get('/api/products/mother')
      .then( (res) => dispatch(setAllProducts(res.data)) )

export const getSingleProduct = (productId) => 
  dispatch => 
    axios.get(`/api/products/${productId}`)
      .then( (res) => dispatch(setSingleProduct(res.data)) )


//Adding product to order
export const addProductToOrder = (productId) => {
  return (dispatch, getState) => {
    axios.get(`/api/orders/list/${productId}`,
      {productId: productId})
    .then(res => {
      const targetOrderId = res.data.order_id
      const newOrder = getState().orders.singleOrder
      const orderId = getState().orders.singleOrder.orderId
      const orderListItems = getState().orders.singleOrder.items
      
      //FIX ME ==> still adding repeat listItem ids
      if(!orderListItems[res.data.id]){
        orderListItems.push(res.data.id)
      }
      // =============================================

      const updatedOrder = Object.assign({}, newOrder, {orderId: targetOrderId, items: orderListItems})
    })
  }
}

export default reducer
