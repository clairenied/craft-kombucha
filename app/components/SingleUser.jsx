import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { switchRole } from '../reducers/users';

const SingleUser = ({ user, toggleRole }) => {
  const { fullName, email, billingAddress, type } = user;

  return (
    <div className="row col-xs-12">
      <div className="col-xs-12 col-sm-4">
        <strong>{fullName}</strong><br />
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <div className="col-xs-12 col-sm-4">
        <address>
          {billingAddress.streetAddress}<br />
          {billingAddress.city}, {billingAddress.state} {billingAddress.zip}<br />
        </address>
      </div>

      <div className="col-xs-12 col-sm-4">
        <div>
          <strong>Role</strong><br />
          <select name="role" value={type} onChange={evt => toggleRole(evt)}>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    toggleRole: (evt) => {
      dispatch(switchRole(user.id, evt.target.value));
    }
  };
};

SingleUser.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    billingAddress: PropTypes.object,
    type: PropTypes.string,
  }),
  toggleRole: PropTypes.func,
};

export default connect(() => ({}), mapDispatchToProps)(SingleUser);
