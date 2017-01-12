import React from 'react'
import { Link } from 'react-router'

const ReviewModule = (props) => {
	return (
		<div>
			<h4><b>Title</b></h4>
			<p><b>{props.review.user.fullName}</b>
			<p>{Date(Date.parse(props.review.created_at.replace(/( +)/, ' UTC$1')))}</p>
			<b>{"*".repeat(props.review.starRating)}</b></p>
			<p>{props.review.content}
			</p>
		</div>
	)
}

export default ReviewModule