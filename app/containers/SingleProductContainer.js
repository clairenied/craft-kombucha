import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'

import { deleteProduct } from '../reducers/products'

function dummyProduct() {
  return {
    basePrice: 0,
    id: 0,
    lineitem_id: 0,
    photo: "",
    price: "",
    producttype: {},
    producttype_id: 0,
    remaining: 0,
    size: "",
    updated_at: "",
  }
}

function mapStateToProps(state, ownProps){
  let productId = ownProps.params.productId
  return {
    product: state.products[productId] || dummyProduct(),
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    generateReviewTitle: (reviewString) => {
      let reviewArr = reviewString.split(' ').slice(0, 7)
      return reviewArr.join(' ')
    },
    deleteProduct: (productObj) => { 
      return dispatch(deleteProduct(ownProps.params.productId)) },
  }
}

const SingleProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct)

export default SingleProductContainer