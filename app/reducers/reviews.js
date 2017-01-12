import axios from 'axios'

const initialState = {
  singleReview: {
    content: "",
    rating: 0
  },
  product: {
    producttype: {
      reviews: []
    }
  }
}

const reducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case SET_SINGLE_REVIEW:
      nextState.singleReview = action.singleReview;
      break;
    case SET_ALL_REVIEWS:
      nextState.product = action.product
      break;
    default:
      return state;
  }
  return nextState;
}

const SET_SINGLE_REVIEW = 'SET_SINGLE_REVIEW';
export const setSingleReview = singleReview => ({
  type: SET_SINGLE_REVIEW, singleReview
})

const SET_ALL_REVIEWS = 'SET_ALL_REVIEWS';
export const setAllReviews = product => ({
  type: SET_ALL_REVIEWS, product
})

export const fetchSingleReview = (reviewId) => 
  dispatch => 
    axios.get(`/api/products/${productId}/reviews/`)
      .then( (res) => dispatch(setSingleReviews(res.data)) )


export const fetchReviews = (productId) => 
  dispatch => 
    axios.get(`/api/products/${productId}`)
      .then( (res) => dispatch(setAllReviews(res.data)) )

export default reducer
