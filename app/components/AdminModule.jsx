import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { switchRole } from '../reducers/users';

const AdminModule = (props) => {
  const { fullName, email, billingAddress, type } = props.user;

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
          {billingAddress.streetAddress}<br />
          {billingAddress.city}, {billingAddress.state} {billingAddress.zip}<br />
        </address>
      </div>

      <div className="col-xs-12 col-sm-4">
        <div>
          <strong>Role</strong><br />
          <select name="role" value={type} onChange={evt => props.toggleRole(evt)}>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { user } = ownProps;
  return { user };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    toggleRole: (evt) => {
      dispatch(switchRole(user.id, evt.target.value));
    }
  };
};

AdminModule.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    billingAddress: PropTypes.object,
    type: PropTypes.string,
  }),
  toggleRole: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminModule);
