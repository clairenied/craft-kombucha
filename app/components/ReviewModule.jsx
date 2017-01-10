import React from 'react'
import { Link } from 'react-router'

const ReviewModule = (props) => {
	return (
		<div>
			<h4><b>Title</b></h4>
			<p><b>First name</b>
			<p>Date created</p>
			<b>******</b></p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis volutpat dolor, vitae mollis dolor congue vel. Suspendisse tortor erat, vestibulum a lorem id, dictum tempor enim. Donec aliquam rutrum nisl nec aliquam. Cras accumsan purus dolor, eget ullamcorper augue fermentum eu. Duis quis mi sagittis ipsum aliquam hendrerit in sit amet velit.
			</p>
      <Link to="/single-review">More...</Link>
		</div>
	)
}

export default ReviewModule