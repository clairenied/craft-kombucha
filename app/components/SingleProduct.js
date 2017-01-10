import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router'

import ReviewModule from './ReviewModule'

const SingleProduct = (props) => {
  return(
		<div>
			<div className="page-header col-xs-12">
        <h1>Single Product</h1>
      </div>
      <div className="col-xs-12 col-sm-4">
        <img src="http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png" className="img-responsive"/>
      </div>
      <div className="col-xs-12 col-sm-8">
        <h4 class="text-uppercase">Product Description</h4>
        <p>
          In ullamcorper rutrum quam ut interdum. Vivamus ac condimentum ex. Nam tristique purus vitae arcu ornare, sit amet auctor turpis vehicula. Ut posuere luctus vestibulum. In consectetur aliquam sem at rutrum. Nam sit amet mattis mi. Quisque enim quam, rutrum tempor nisl eu, molestie porttitor arcu. Mauris dignissim, ipsum ac bibendum molestie, augue ipsum finibus dolor, non pharetra turpis sem ac ligula. Sed aliquet sollicitudin quam, eu blandit libero fringilla vitae. Curabitur pharetra urna vel orci lobortis, id bibendum metus congue. Aliquam hendrerit velit vitae elit finibus pharetra. Phasellus sem risus, aliquet non elit at, porta vulputate sem. Duis tempor purus id ipsum tempor rutrum.
        </p>
      </div>
      <div className="row col-xs-12">
        <div className="page-header col-xs-12">
          <h2>Reviews</h2>
        </div>
        <div className="col-xs-12">
          <ReviewModule/>
        </div>
      </div>
		</div>
  )
}

export default SingleProduct;


// function mapStateToProps(state){
// 	return {
// 	}
// }
// function mapDispatchToProps(dispatch){
// 	return{

// 	}
// }
// export default connect(mapStateToProps,mapStateToProps)(SingleProduct)
