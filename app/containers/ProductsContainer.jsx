import { connect } from 'react-redux'
import Products from '../components/Products'
import {addProductToOrder} from '../reducers/products'

function mapStateToProps(state){
  return {
    products: Object.values(state.products)
  }
}

function mapDispatchToProps(dispatch){
 return{
 	addProductToOrder: function(product){
 		dispatch(addProductToOrder(product))
 	}
 }
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer