import React from 'react'
import { Link } from 'react-router'

const ReviewModule = (props) => {
	return (
		<div>
			<h4><b>Title</b></h4>
			<p><b>{props.review.content}</b></p>
			<p>{Date(Date.parse(props.review.created_at.replace(/( +)/, ' UTC$1')))}</p>
			<b>{"*".repeat(props.review.starRating)}</b>
		</div>
	)
}

export default ReviewModule
			// <p>{Date(Date.parse(props.review.created_at.replace(/( +)/, ' UTC$1')))}</p>
			// <b>{"*".repeat(props.review.starRating)}</b></p>