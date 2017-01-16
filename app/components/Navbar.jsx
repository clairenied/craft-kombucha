import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { logout } from 'APP/app/reducers/auth'; // eslint-disable-line

class Navbar extends Component {
  renderAdminLink() {
    return (this.props.auth && this.props.auth.type === 'admin')
    ? <li><Link to="/admin">Admin</Link></li>
    : null;
  }

  renderLogInLogOut() {
    return this.props.auth // @todo: define PropType later
    ? <li><Link to="/" onClick={this.props.logout}>Log Out</Link></li>
    : <li><Link to="/login">Log In</Link></li>;
  }

  renderWelcome() {
    return this.props.auth
    ? <li><Link><strong>Welcome, {this.props.auth.firstName}!</strong></Link></li>
    : null;
  }

  render() {
    console.log("here are navbar's props", this.props);
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Craft Kombucha</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <form className="navbar-form">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/* Welcome message displays for logged in users */}
              {this.renderWelcome()}
              {/* Cart link displays everyone, including users not logged in */}
              <li><Link to="/order">Order</Link></li>
              <li><Link to="/products-create">Add Product</Link></li>
              {/* Admin link displays only for users logged in as admins */}
              {this.renderAdminLink()}
              {/* Always displays link to either log in or log out*/}
              {this.renderLogInLogOut()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

Navbar.propTypes = {
  auth: PropTypes.shape({
    firstName: PropTypes.string,
    type: PropTypes.string,
  }),
  logout: PropTypes.func
};

export default connect(mapStateToProps, { logout })(Navbar);
