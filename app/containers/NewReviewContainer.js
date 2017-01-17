import React from 'react';
import store from '../store';
import NewReview from '../components/NewReview.jsx'
import {addNewReview} from '../reducers/reviews'

class NewReviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contentValue: '',
      starRatingValue: 0,
      userId: 0,
      productTypeId: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;

    if(evt.target.className=="StarRating-form-control"){
      this.setState({
        starRatingValue: value,
      });
    } else if (evt.target.className=="Content-form-control"){
      this.setState({
        contentValue: value,
      });
    } else if (evt.target.className=="User-form-control"){
      this.setState({
        userId: value,
      });
    } else if (evt.target.className=="Product-form-control"){
      this.setState({
        productTypeId: value,
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    store.dispatch(addNewReview(this.state.starRatingValue, this.state.contentValue, this.state.userId, this.state.productTypeId));

    this.setState({
      starRatingValue: 0,
      contentValue: '',
      userId: 0,
      productTypeId: 0
    });
  }

  render() {
    const starRatingValue = this.state.starRatingValue;
    const contentValue = this.state.contentValue;
    const userId = this.state.userId;
    const productTypeId = this.state.productTypeId

    return (
      <NewReview
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        starRatingValue={starRatingValue}
        contentValue={contentValue}
        userId={userId}
        productTypeId={productTypeId}
      />
    );
  }

}

export default NewReviewContainer;
