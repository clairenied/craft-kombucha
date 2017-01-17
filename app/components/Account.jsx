import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';

class Account extends Component {
  render() {
    const { firstName, lastName, fullName, email, billingAddress, shippingAddress, type } = props.auth;

    return (
      <div className="row col-xs-12">
        <div className="col-xs-12 col-sm-4">
          <h3>Profile</h3><br />
          <TextInput htmlFor="firstName" label="First Name" inputType="text" />
          <TextInput htmlFor="lastName" label="Last Name" inputType="text" />
          <TextInput
            htmlFor="password"
            label="Password"
            inputType="password"
            onChange={evt => this.onPassword1Change(evt)}
          />
          <a href="mailto:#">{email}</a>
          {(type === 'admin') ? <small>You are an admininstrator.</small> : null}
        </div>

        <div className="col-xs-12 col-sm-4">
          <h3>Billing Address</h3><br />
          <address>
            {billingAddress.streetAddress}<br />
            {billingAddress.city}, {billingAddress.state} {billingAddress.zip}<br />
          </address>
        </div>

        <div className="col-xs-12 col-sm-4">
          <h3>Shipping Address</h3><br />
          {shippingAddress
            ? (
              <address>
                {shippingAddress.streetAddress}<br />
                {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}<br />
              </address>
            )
            : Enter a shipping address
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

Account.propTypes = {
  auth: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    billingAddress: PropTypes.object,
    shippingAddress: PropTypes.object,
    type: PropTypes.string,
  })
};

export default connect(mapStateToProps)(Account);
