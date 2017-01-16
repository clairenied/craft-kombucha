import axios from 'axios'
import { browserHistory } from 'react-router';
import { setAllReviews } from './reviews'

function transformProduct(product) {
  product.reviews = product.reviews.map(review => review.id);
  return product;
}

const initialState = {}

const reducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case SET_PRODUCT:
      nextState[action.product.id] = action.product;
      break;
    default:
      return state;
  }
  return nextState;
}

const SET_PRODUCT = 'SET_PRODUCT';
export const setSingleProduct = product => 
  dispatch => {
    // dispatch(setAllReviews(product.reviews));
    dispatch({
      // type: SET_PRODUCT, product: transformProduct(product)
      type: SET_PRODUCT, 
      product: product,
    })
  }

export const setAllProducts = allProducts =>
  dispatch => 
    allProducts.forEach(product => dispatch(setSingleProduct(product)))

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

export const createProduct = (productObj) => {
  return dispatch => {
    axios.post('/api/products', productObj)
    .then(res => { 
      dispatch(setAllProducts(res.data))
      browserHistory.push('/products')
    })
  }
}

export const updateProduct = (productObj, productId) => {
  return dispatch => {
    axios.put(`/api/products/${productId}`, productObj)
    .then(res => { 
      dispatch(setAllProducts(res.data))
      browserHistory.push('/products')
    })
  }
}

export const getSingleProduct = (productId) => 
  dispatch => 
    axios.get(`/api/products/${productId}`)
      .then( (res) => dispatch(setSingleProduct(res.data)) )

export default reducer