import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { createProduct } from '../reducers/products'

class CreateProduct extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      basePrice: 0,
      category: 'kombucha',
      description: '',
      size: 'small',
      remaining: 0,
      photo: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, evt){
    this.setState({
      [field]: evt.target.value
    })
    console.log(this.state)
  }

  handleSubmit(evt){
    evt.preventDefault()
    const userToCreate = this.state
    this.props.createProduct(userToCreate)
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
                onChange={this.handleChange.bind(this, 'basePrice')} 
                className="form-control"
                value={this.state.basePrice} 
                name="basePrice" />
            </div>
          

            <div className="form-group">
              <label>Description</label>
              <textarea
                onChange={this.handleChange.bind(this, 'description')} 
                className="form-control"
                value={this.state.description} 
                name="description" />
            </div>

            <div className="form-group">
              <div>
                <label>Category</label>
              </div>
              <select 
                name="category"
                onChange={this.handleChange.bind(this, 'category')}>
                <option
                  value="kombucha"
                  name="category">
                  Kombucha
                </option>
                <option 
                  value="merch"
                  name="category">
                  Merch
                </option>
                <option 
                  value="mother"
                  name="category">
                  Mother
                </option>
              </select>
            </div>

            <div className="form-group">
              <div>
                <label>Size</label>
              </div>
              
              <select name="size"
                onChange={this.handleChange.bind(this, 'size')}>
                <option 
                  value="small"
                  name="size">
                  Small
                </option>
                <option 
                  value="medium"
                  name="size">
                  Medium
                </option>
                <option 
                  value="large"
                  name="size">
                  Large
                </option>
                <option 
                  value="12-pack"
                  name="size">
                  12-pack
                </option>
                <option 
                  value="keg"
                  name="size">
                  Keg
                </option>
              </select>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">

            <div className="form-group">
              <label>Remaining</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'remaining')} 
                className="form-control"
                value={this.state.remaining} 
                name="remaining" />
            </div>

            <div className="form-group">          
              <label>Photo</label>
              <input 
                type="text" 
                onChange={this.handleChange.bind(this, 'photo')} 
                className="form-control"
                value={this.state.photo} 
                name="photo" />
            </div>

            <img src={this.state.photo} className="img-responsive"/>
          </div>

          <div className="col-xs-12 col-sm-2">


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
    createProduct: (productObj) => { dispatch(createProduct(productObj)) }
  }
}

const CreateProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct);

export default CreateProductContainer