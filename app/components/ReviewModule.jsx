import React from 'react'
import { Link } from 'react-router'

const ReviewModule = (props) => {
	return (
		<div>
			<h4><b>Title</b></h4>
			<p><b>Hi!</b>
			<p><b>Created at the dawn of the millenium</b></p>
			<b>*****</b></p>
			<p>
				I really like this kombucha
			</p>
		</div>
	)
}

export default ReviewModule
			// <p>{Date(Date.parse(props.review.created_at.replace(/( +)/, ' UTC$1')))}</p>
			// <b>{"*".repeat(props.review.starRating)}</b></p>