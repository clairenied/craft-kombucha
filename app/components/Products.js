import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductModule from './ProductModule';

const Products = (props) => {
  const allProducts = props.products.allProducts

  return (
    <div>
  		<div className="page-header col-xs-12">
        <h1>Products</h1>
      </div>

      {allProducts.map((singleProduct, i) => {
        return (<ProductModule key={i} singleProduct={singleProduct}/>)
      })}
    </div>
  )
}

// const Products = (props) => {
//   return (
//     <div>
//       Do I work.
//     </div>
//   )
// }

export default Products;

