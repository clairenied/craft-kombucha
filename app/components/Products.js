import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductModule from './ProductModule';

const Products = (props) => {
  return (
    <div>
  		<div className="page-header col-xs-12">
        <h1>Products</h1>
      </div>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
      <ProductModule/>
    </div>
  )
}

export default Products;

// function mapStateToProps(state){
// 	return {

// 	}
// }
// function mapDispatchToProps(dispatch){
// 	return{

// 	}
// }
// export default connect(mapStateToProps,mapStateToProps)(Products)

