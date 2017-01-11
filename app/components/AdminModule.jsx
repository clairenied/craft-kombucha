import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const AdminModule = (props) => {
  const { fullName, email, billingAddress } = props.user;

  return (
    <div className="row col-xs-12">
      <div className="col-xs-12 col-sm-4">
        <address>
          <strong>{fullName}</strong><br />
          <a href="mailto:#">{email}</a>
        </address>
      </div>

      <div className="col-xs-12 col-sm-4">
        <address>
          {billingAddress.streetNumber} {billingAddress.streetName}<br />
          {billingAddress.city}, {billingAddress.state} {billingAddress.zip}<br />
        </address>
      </div>

      <div className="col-xs-12 col-sm-4">
        <div>
          <input type="radio" checked />
          <label>
            &emsp;Admin
          </label>
        </div>

        <div>
          <input type="radio" />
          <label>
            &emsp;Not Admin
          </label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { user } = ownProps;
  return { user };
};

export default connect(mapStateToProps)(AdminModule);
