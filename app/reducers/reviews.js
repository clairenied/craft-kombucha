import axios from 'axios'

const initialState = {
  singleReview: {
    content: "",
    rating: 0,
    created_at: "",
    user: {
      fullName: ""
    },
    producttype: {
      name: ""
    }
  },
  reviews: [{
    content: "",
    created_at: "",
    id: 0,
    user:{
    fullName: "",
    id: 0,
    },
    producttype:{
      name: ""
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
export const setAllReviews = reviews => {
    return {
    type: SET_ALL_REVIEWS, reviews
  }
}

// const ASSOCIATENEWREVIEW = 'ASSOCIATENEWREVIEW'
// export const associateNewReview => (review, userId, productId){
  
// }

export const fetchSingleReview = (reviewId) =>  
  dispatch => 
    axios.get(`/api/reviews/${reviewId}`)
    .then(res=>res.data)
    .then(review=>{
      if (review) dispatch(setSingleReview(review))
    })

export const fetchReviews = productId => 
  dispatch => {
    if (productId){
      axios.get(`/api/products/${productId}`)
        .then( res => res.data)
        .then( product => {
          let reviews = product.producttype.reviews
          dispatch(setAllReviews(reviews))
      })
    } else {
      axios.get('/api/reviews')
        .then( res => dispatch(setAllReviews(res.data)))
    }
  }

// export const addNewReview = (starRating, content, userId, productId) =>
//   dispatch => 
//     axios.post('api/reviews', { starRating: starRating, content: content})
//      .then( res => res.data)
//      .then( review => dispatch(associateNewReview(res.data, userId, productId)))


export default reducer
