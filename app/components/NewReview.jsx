import React from 'react';

export default function (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const starRatingValue = props.starRatingValue;
  const contentValue = props.contentValue;
  const userId = props.userId;
  const productTypeId = props.productTypeId;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Review</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Rating (1-5)</label>
            <div className="col-xs-10">
              <input
                className="StarRating-form-control"
                type="text"
                onChange={handleChange}
                value={starRatingValue}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Content</label>
            <div className="col-xs-10">
              <input
                className="Content-form-control"
                type="text"
                onChange={handleChange}
                value={contentValue}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">User ID</label>
            <div className="col-xs-10">
              <input
                className="User-form-control"
                type="text"
                onChange={handleChange}
                value={userId}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">ProductTypeID</label>
            <div className="col-xs-10">
              <input
                className="Product-form-control"
                type="text"
                onChange={handleChange}
                value={productTypeId}
              />
            </div>
          </div>         
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!starRatingValue || !contentValue || !productTypeId || ! userId}>
                Post Review
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
