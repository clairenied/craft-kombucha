import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminModule from './AdminModule';

const Admin = (props) => {
  return (
    <div>
      <div className="page-header col-xs-12">
        <h1>Admin</h1>
      </div>
      <AdminModule/>
      <AdminModule/>
      <AdminModule/>
      <AdminModule/>
    </div>
  )
}

export default Admin;