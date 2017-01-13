import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// import { createUser } from '../action-creators/users'

class CreateProduct extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      basePrice: 0,
      category: '',
      description: '',
      size: '',
      remaining: 0,
      photo: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, evt){
    this.setState({
      [field]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    const userToCreate = this.state
    // this.props.createUser(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
    return
  }

  render(){
    return(
      <div>
        <div className="page-header col-xs-12">
          <h1>Update Product</h1>
        </div>
        
        <form onSubmit={this.handleSubmit}>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label>Product Name</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'firstName')} 
                className="form-control"
                value={this.state.firstName} 
                name="firstName"/>
            </div>

            <div className="form-group">    
              <label>Price</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'lastName')} 
                className="form-control"
                value={this.state.lastName} 
                name="lastName" />
            </div>
          
            <div className="form-group">
              <label>Category</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'email')} 
                className="form-control"
                value={this.state.email} 
                name="email" />
              </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                onChange={this.handleChange.bind(this, 'password')} 
                className="form-control"
                value={this.state.password} 
                name="password" />
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label>Size</label>
              <input 
                type="password" 
                onChange={this.handleChange.bind(this, 'confirmPassword')} 
                className="form-control"
                value={this.state.confirmPassword} 
                name="confirmPassword" />
            </div>

            <div className="form-group">
              <label>Remaining</label>
              <input 
                type="password" 
                onChange={this.handleChange.bind(this, 'confirmPassword')} 
                className="form-control"
                value={this.state.confirmPassword} 
                name="confirmPassword" />
            </div>

            <div className="form-group">          
              <label>Photo</label>
              <input 
                type="password" 
                onChange={this.handleChange.bind(this, 'confirmPassword')} 
                className="form-control"
                value={this.state.confirmPassword} 
                name="confirmPassword" />
            </div>
          </div>

          <div className="col-xs-12">
            <button type="submit" className="btn btn-primary">Create Product</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // createUser: (email, password, firstName, lastName) => { dispatch(createUser(email, password, firstName, lastName)) }
  }
}

const CreateProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct);

export default CreateProductContainer