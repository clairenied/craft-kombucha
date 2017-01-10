import React from 'react'
import { Link } from 'react-router'

const Signup = (props) => {
  return (
    <form>
      <div className="page-header col-xs-12">
        <h1>Create an Account</h1>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text"
            className="form-control"/>

          <label>Email</label>
          <input 
            type="text"
            className="form-control"/>

          <label>Password</label>
          <input 
            type="text"
            className="form-control"/>

          <label>Confirm Password</label>
          <input 
            type="text"
            className="form-control"/>
        </div>
        <div className="form-group">
          <label>Birthday</label>
          <input 
            type="text"
            className="form-control"/>
        </div>
      </div>
      <div className="col-md-6">

        <div>
          <label>Address Number</label>
          <input 
            type="text"
            className="form-control"/>

          <label>Street</label>
          <input 
            type="text"
            className="form-control"/>

          <label>City</label>
          <input 
            type="text"
            className="form-control"/>

          <label>State</label>
          <input 
            type="text"
            className="form-control"/>

          <label>Zip</label>
          <input 
            type="text"
            className="form-control"/>
        </div>
      </div>

      <div className="col-xs-12">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </form>
  )
}

export default Signup