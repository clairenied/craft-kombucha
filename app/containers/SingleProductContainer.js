import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'

function mapStateToProps(state, ownProps){
  return {
    products: state.products,
    reviews: state.products.singleProduct.producttype.reviews
  }
}

function mapDispatchToProps(dispatch, ownProps){
 return{
  generateReviewTitle: (reviewString) => {
    let reviewArr = reviewString.split(' ').slice(0, 7)
    return reviewArr.join(' ')
  }
 }
}

const SingleProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct)

export default SingleProductContainer