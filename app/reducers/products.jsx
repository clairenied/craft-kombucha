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
    case ADD_PRODUCT_TO_ORDER:
      nextState.item = action.item;
    default:
      return state;
  }
  return nextState;
}

const ADD_PRODUCT_TO_ORDER = 'ADD_PRODUCT_TO_ORDER';
export const fillOrder = (listItemId) => {
  return {
    type: ADD_PRODUCT_TO_ORDER,
    listItemId
  } 
};

// // how will we get orderId to see if it exists?
// pushes to array but need to update the listItem and order to reflect the changes
export const addProductToOrder = (item) => {
  return (dispatch, getState) => {
    let order = '1'
    axios.get(`/api/orders/${order}`, //fill in order number later
      {listitem_id: item})
    .then(res => res )
    .then( r => { 
      const targetOrder = r.data
      const targetLineItem = getState().products.singleProduct //saving 
      targetOrder.lineitems.push(targetLineItem)
      
    })
  }
}

// ==> Can we create an api route for list items ==> tap in to list items <== ????
// export const addProductToOrder = (item) => {
//   return (dispatch, getState) => {
//     let item = '1'
//     axios.get(`/api/listitem/${item}`, //fill in order number later
//       {listitem_id: item})
//     .then(res => res )
//     .then( r => { 
//       const targetOrder = r.data
//       const targetLineItem = getState().products.singleProduct //saving 
//       targetOrder.lineitems.push(targetLineItem)
      
//     })
//   }
// }

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

export default reducer
