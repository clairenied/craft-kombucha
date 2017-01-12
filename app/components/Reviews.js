import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReviewModule from './ReviewModule';

const Reviews = (props) => {
  const product = props.product
  const reviews = product.producttype.reviews

  return (
    <div>
  		<div className="page-header col-xs-12">
        <h1>{product.producttype.name}</h1>
      </div>

      {reviews.map((review) => {
        return (<ReviewModule key={review.id} review={review}/>)
      })}
    </div>
  )
}

export default Reviews;

