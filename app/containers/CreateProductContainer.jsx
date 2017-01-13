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
          <h1>Create Product</h1>
        </div>
        
        <form onSubmit={this.handleSubmit}>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label>Product Name</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'name')} 
                className="form-control"
                value={this.state.name} 
                name="name"/>
            </div>

            <div className="form-group">    
              <label>Price</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'price')} 
                className="form-control"
                value={this.state.price} 
                name="price" />
            </div>
          
            <div className="form-group">
              <div>
                <label>Category</label>
              </div>
              <select name="category">
                <option 
                  onChange={this.handleChange.bind(this, 'category')}
                  value="kombucha"
                  name="category">
                  Kombucha
                </option>
                <option 
                  onChange={this.handleChange.bind(this, 'category')}
                  value="merch"
                  name="category">
                  Merch
                </option>
                <option 
                  onChange={this.handleChange.bind(this, 'category')}
                  value="mother"
                  name="category">
                  Mother
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                onChange={this.handleChange.bind(this, 'description')} 
                className="form-control"
                value={this.state.description} 
                name="description" />
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
              <div className="form-group">
                <div>
                  <label>Size</label>
                </div>
                <select name="size">
                  <option 
                    onChange={this.handleChange.bind(this, 'size')}
                    value="small"
                    name="size">
                    Small
                  </option>
                  <option 
                    onChange={this.handleChange.bind(this, 'size')}
                    value="medium"
                    name="size">
                    Medium
                  </option>
                  <option 
                    onChange={this.handleChange.bind(this, 'size')}
                    value="large"
                    name="size">
                    Large
                  </option>
                  <option 
                    onChange={this.handleChange.bind(this, 'size')}
                    value="12-pack"
                    name="size">
                    12-pack
                  </option>
                  <option 
                    onChange={this.handleChange.bind(this, 'size')}
                    value="keg"
                    name="size">
                    Keg
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Remaining</label>
              <input 
                type="password" 
                onChange={this.handleChange.bind(this, 'remaining')} 
                className="form-control"
                value={this.state.remaining} 
                name="remaining" />
            </div>

            <div className="form-group">          
              <label>Photo</label>
              <input 
                type="password" 
                onChange={this.handleChange.bind(this, 'photo')} 
                className="form-control"
                value={this.state.photo} 
                name="photo" />
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