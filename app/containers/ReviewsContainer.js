import { connect } from 'react-redux'
import Reviews from '../components/Reviews'

function mapStateToProps(state){
  return {
    product: state.reviews.product
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