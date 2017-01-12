import axios from 'axios'

const initialState = {
  allProducts: [],
  singleProduct: {
    producttype: {
      name: "",
      reviews: [{
        content: "",
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

export const getSingleProduct = (productId) => 
  dispatch => 
    axios.get(`/api/products/${productId}`)
      .then( (res) => dispatch(setSingleProduct(res.data)) )

export default reducer
