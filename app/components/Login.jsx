import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { login } from 'APP/app/reducers/auth'; // eslint-disable-line

const Login = ({ handleSubmit }) => (
  <div className="container">
    <form
      onSubmit={handleSubmit}
      className="col-lg-4"
    >
      <span className="text-left">
        <h2 className="text-center">Log in</h2>
      </span>
      <div className="form-group">
        <input name="email" placeholder="Email" className="form-control" />
      </div>
      <div className="form-group">
        <input name="password" type="password" placeholder="Password" className="form-control" />
      </div>
      <div className="form-group">
        <span className="pull-left">
          Don&#39;t have an account yet?<br />
          <Link to="/signup">Sign up here.</Link>
        </span>
        <input type="submit" value="Log in" className="btn btn-primary pull-right" />
      </div>
    </form>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (evt) => {
      evt.preventDefault();
      dispatch(login(evt.target.email.value, evt.target.password.value));
    }
  };
};

Login.propTypes = {
  handleSubmit: PropTypes.func,
};

export default connect(() => ({}), mapDispatchToProps)(Login);
