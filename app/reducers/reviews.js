import axios from 'axios'

const initialState = {
  singleReview: {
    content: "",
    rating: 0
  },
  reviews: [{
    content: "",
    created_at: "",
    id: 0,
    user:{
    fullName: "",
    id: 0,
    }
  }]
}

const reducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case SET_SINGLE_REVIEW:
      nextState.singleReview = action.singleReview;
      break;
    case SET_ALL_REVIEWS:
      nextState.reviews = action.reviews
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
export const setAllReviews = product => {
    let reviews = product.producttype.reviews
    return {
    type: SET_ALL_REVIEWS, reviews
  }
}

export const fetchSingleReview = (reviewId) => 
  dispatch => 
    axios.get(`/api/products/${productId}/reviews/`)
      .then( (res) => dispatch(setSingleReviews(res.data)) )


export const fetchReviews = (productId) => 
  dispatch => 
    axios.get(`/api/products/${productId}`)
      .then( (res) => dispatch(setAllReviews(res.data)) )

export default reducer
