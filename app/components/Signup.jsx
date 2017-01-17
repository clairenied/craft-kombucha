import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Selector from './Selector';
import BirthdaySelector from './BirthdaySelector';
import TextInput from './TextInput';

import { signUpForAccount } from '../reducers/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: '',
      password2: '',
      dirty: false,
    };
    this.stateAbbrevs = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];
  }

  onPassword1Change(evt) {
    this.setState({ password1: evt.target.value });
  }

  onPassword2Change(evt) {
    this.setState({ password2: evt.target.value, dirty: true });
  }

  get passwordsMatch() {
    return (this.state.password1 === this.state.password2 || !this.state.dirty);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="page-header col-xs-12">
          <h1>Create An Account</h1>
        </div>

        <div className="col-md-6">
          <TextInput htmlFor="firstName" label="First Name" inputType="text" />
          <TextInput htmlFor="lastName" label="Last Name" inputType="text" />
          <TextInput htmlFor="email" label="Email" inputType="text" />
          <TextInput
            htmlFor="password"
            label="Password"
            inputType="password"
            onChange={evt => this.onPassword1Change(evt)}
          />
          <TextInput
            htmlFor="confirmPassword"
            label="Confirm Password"
            inputType="password"
            onChange={evt => this.onPassword2Change(evt)}
            hasError={!this.passwordsMatch}
            errorMessage="Passwords do not match."
          />
        </div>

        <div className="col-md-6">
          <TextInput htmlFor="streetAddress" label="Street Address" inputType="text" />
          <TextInput htmlFor="city" label="City" inputType="text" />

          <div className="form-group">
            <label htmlFor="state">State</label>
            <Selector name="state" className="form-control" id="state">
              {
                this.stateAbbrevs.map(state => <option value={state} key={state}>{state}</option>)
              }
            </Selector>
          </div>

          <TextInput htmlFor="zip" label="Zip" inputType="text" />

          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <BirthdaySelector />
          </div>
        </div>

        <div className="col-xs-12">
          <input type="submit" value="Sign up" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (evt) => {
      evt.preventDefault();

      // Creates user object for database
      const userKeys = ['firstName', 'lastName', 'email', 'password'];
      const userInfo = { type: 'member' }; // Default type is member
      userKeys.forEach((key) => {
        userInfo[key] = evt.target[key].value;
      });

      // Birthday handled separately
      userInfo.birthday = `${evt.target.year.value}-${evt.target.month.value}-${evt.target.day.value}`;
      // @todo: Add birthday validation

      // Creates address object for database
      const addressKeys = ['streetAddress', 'city', 'state', 'zip'];
      const addressInfo = {};
      addressKeys.forEach((key) => {
        addressInfo[key] = evt.target[key].value;
      });
      dispatch(signUpForAccount({ userInfo, addressInfo }));
    }
  };
};

Signup.propTypes = {
  handleSubmit: PropTypes.func,
};

export default connect(() => ({}), mapDispatchToProps)(Signup);
