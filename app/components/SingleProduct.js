import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router'

import ReviewModule from './ReviewModule'

const SingleProduct = (props) => {
  const singleProduct = props.products.singleProduct
  const reviews = props.reviews
  
  return(
		<div>
			<div className="page-header col-xs-12">
        <h1>{singleProduct.producttype.name}</h1>
      </div>
      <div className="col-xs-12 col-sm-6">
        <img src={singleProduct.photo} className="img-responsive"/>
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Link to={`/products/${singleProduct.id}/update`}>Update</Link>
          </div>
          <div className="col-xs-12 col-sm-6 text-right">
            <a href="#">Delete</a>
          </div>
        </div>
        <h4 className="text-uppercase">Product Description</h4>
        <p>
          {singleProduct.size}
        </p>
        <p>
          {singleProduct.producttype.description}
        </p>
        <p>
          Act fast! Only <b>{singleProduct.remaining}</b> remaining
        </p>
        <a href="#" className="btn btn-default">${singleProduct.price}</a>
      </div>
      <div className="row col-xs-12">
        <div className="page-header col-xs-12">
          <h2>Reviews</h2>
        </div>
        <div className="col-xs-12">
          { reviews.map((review, i) => {
              return <ReviewModule 
                key={i}
                review={review}
                generateReviewTitle={props.generateReviewTitle}/>
            })
          }
        </div>
      </div>
		</div>
  )
}

export default SingleProduct;
