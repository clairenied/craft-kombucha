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
 }
}

const SingleProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct)

export default SingleProductContainer