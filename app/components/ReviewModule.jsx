import React from 'react'
import { Link } from 'react-router'

const ReviewModule = (props) => {
	const review = props.review
	return (
		<div>
			<h4><b>{props.generateReviewTitle(review.content)}...</b></h4>
			<h4><b></b></h4>
			<p><b>{review.user.firstName}</b></p>
			<b>{"*".repeat(review.starRating)}</b>
			<p>{review.content}</p>
			<p><i>{Date(Date.parse(review.created_at.replace(/( +)/, ' UTC$1')))}</i></p>
		</div>
	)
}

export default ReviewModule