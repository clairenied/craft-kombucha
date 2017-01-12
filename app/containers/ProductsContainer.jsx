import { connect } from 'react-redux'
import Products from '../components/Products'

function mapStateToProps(state){
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch){
 return{
 }
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer