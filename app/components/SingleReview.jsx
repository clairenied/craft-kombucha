import React from 'react'
import { Link } from 'react-router'

const SingleReview = (props) => {
	return (
		<div>

			<div className="page-header col-xs-12">
        <h1>Review of <Link to="/single-product">Single Product</Link></h1>
      </div>

      <div className="col-xs-12">
				<h3>Title</h3>
				<b>First name</b>
				<p>Date created</p>
				<b>******</b>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis volutpat dolor, vitae mollis dolor congue vel. Suspendisse tortor erat, vestibulum a lorem id, dictum tempor enim. Donec aliquam rutrum nisl nec aliquam. Cras accumsan purus dolor, eget ullamcorper augue fermentum eu. Duis quis mi sagittis ipsum aliquam hendrerit in sit amet velit.
				</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis volutpat dolor, vitae mollis dolor congue vel. Suspendisse tortor erat, vestibulum a lorem id, dictum tempor enim. Donec aliquam rutrum nisl nec aliquam. Cras accumsan purus dolor, eget ullamcorper augue fermentum eu. Duis quis mi sagittis ipsum aliquam hendrerit in sit amet velit.
				</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis volutpat dolor, vitae mollis dolor congue vel. Suspendisse tortor erat, vestibulum a lorem id, dictum tempor enim. Donec aliquam rutrum nisl nec aliquam. Cras accumsan purus dolor, eget ullamcorper augue fermentum eu. Duis quis mi sagittis ipsum aliquam hendrerit in sit amet velit.
				</p>
			</div>
		</div>
	)
}

export default SingleReview