import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

const AdminModule = (props) => {
  return (
    <div className="row col-xs-12">  
      <div className="col-xs-12 col-sm-4">
        <address>
          <strong>Full Name</strong><br/>
          <a href="mailto:#">first.last@example.com</a>
        </address>
      </div>

      <div className="col-xs-12 col-sm-4">
        <address>
          <strong>Twitter, Inc.</strong><br/>
          1355 Market Street, Suite 900<br/>
          San Francisco, CA 94103<br/>
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
      </div>

      <div className="col-xs-12 col-sm-4">
        <div>
          <input type="radio" checked/> 
          <label>
            &emsp;Admin
          </label>
        </div>

        <div>
          <input type="radio"/>
          <label>
            &emsp;Not Admin
          </label>
        </div>
      </div>
    </div>
  )
}

export default AdminModule;