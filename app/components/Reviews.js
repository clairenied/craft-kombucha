import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReviewModule from './ReviewModule';

const Reviews = (props) => {
  const reviews = props.reviews.reviews
  let name = reviews[0].producttype.name
  let allSame = true
  for (let i = 0; i < reviews.length; i++){
    if (reviews[i].producttype.name != name) {
      allSame = false
      break;
    }
  }
  if(!allSame) name="ALL REVIEWS";

  return (
    <div>
  		<div className="page-header col-xs-12">
        <h1>{name}</h1>
      </div>
      {reviews.map((review) => {
        return (<ReviewModule key={review.id} review={review} generateReviewTitle={(content)=>content.substring(0,30)+"..."}/>)
      })}
    </div>
  )
}

export default Reviews;

