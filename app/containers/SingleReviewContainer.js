import { connect } from 'react-redux'
import SingleReview from '../components/SingleReview'

function mapStateToProps(state, ownProps){
  return {
    singleReview: state.reviews.singleReview
  }
}

function mapDispatchToProps(dispatch, ownProps){
 return{
 }
}

const SingleReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleReview)

export default SingleReviewContainer