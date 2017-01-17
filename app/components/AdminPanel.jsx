import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SingleUser from './SingleUser';

const AdminPanel = ({ users }) => (
  <div>
    <div className="page-header col-xs-12">
      <h1>Admin</h1>
    </div>
    {users.map(user => <SingleUser key={user.id} user={user} />)}
  </div>
);

const mapStateToProps = ({ users }) => {
  // Users array is sorted first by type (admins first), then last and first name
  const sortedUsers = _.sortBy(users, ['type', 'lastName', 'firstName']);
  return { users: sortedUsers };
};

AdminPanel.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(AdminPanel);
