import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { login } from 'APP/app/reducers/auth'; // eslint-disable-line

export const Login = ({ handleSubmit }) => (
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
            Don't have an account yet?<br />
            <Link to="/">Sign up here.</Link>
          </span>
          <input type="submit" value="Log in" className="btn btn-primary pull-right" />
        </div>
      </form>
  </div>
);

const mapStateToProps = (state) => {
  return {
    handleSubmit: (evt) => {
      evt.preventDefault();
      console.log('you hit log in!');
      // login(evt.target.username.value, evt.target.password.value);
    }
  };
};

Login.propTypes = {
  handleSubmit: PropTypes.func,
};

export default connect(mapStateToProps)(Login);
