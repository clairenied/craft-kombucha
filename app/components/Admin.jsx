import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AdminModule from './AdminModule';

class Admin extends Component {
  renderOneUser(user, i) {
    return <AdminModule key={i} user={user} />;
  }

  render() {
    const { users } = this.props;
    console.log('got users from store:', users);
    return (
      <div>
        <div className="page-header col-xs-12">
          <h1>Admin</h1>
        </div>
        {users.map(this.renderOneUser)}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const { users } = state;
  console.log('heres users', users);
  return { users };
};

export default connect(mapStateToProps)(Admin);


// Admin.propTypes = {
//   users: PropTypes.array,
// };
    // {
    //   props.users.map((user, i) => <AdminModule key={i} user={user} />)
    // }
