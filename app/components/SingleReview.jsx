import React from 'react'
import { Link } from 'react-router'

const SingleReview = (props) => {
	let review = props.singleReview
	return (
		<div>

			<div className="page-header col-xs-12">
        <h1>Review of <Link to="/single-product">Single Product</Link></h1>
      </div>

      <div className="col-xs-12">
				<h3>Title</h3>
				<b>First name</b>
				<p>{Date(Date.parse(review.created_at.replace(/( +)/, ' UTC$1')))}</p>
				<b>{"*".repeat(review.starRating)}</b>
				<p>{review.content}</p>
			</div>
		</div>
	)
}

export default SingleReview