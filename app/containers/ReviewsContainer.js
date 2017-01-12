import { connect } from 'react-redux'
import Reviews from '../components/Reviews.js'

function mapStateToProps(state){
  return {
    reviews: state.reviews
  }
}

function mapDispatchToProps(dispatch){
 return{
 }
}

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)

export default ReviewsContainer