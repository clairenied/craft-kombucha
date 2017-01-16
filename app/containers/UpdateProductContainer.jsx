import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { updateProduct } from '../reducers/products';

import { updateAdminProductForm, resetProductUpdateFrom } from '../reducers/productUpdateForm';

// const emptyForm = () => {
//   return { 
//     name: '',
//     basePrice: 0,
//     category: '',
//     description: '',
//     size: '',
//     remaining: 0,
//     photo: '',
//   }
// };
// import { createUser } from '../action-creators/users'

class UpdateProduct extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = emptyForm()
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // componentDidMount() {
  //   this.setState(this.props.products);
  //   console.log('DID THE STATE GET SET', this.state)
  // }

  // handleChange(field, evt){
  //   console.log(this.state)
  //   this.setState({
  //     [field]: evt.target.value
  //   })
  // }

  // handleSubmit(evt){
  //   evt.preventDefault()
  //   const productToUpdate = {
  //     name: this.state.name,
  //     basePrice: this.state.basePrice,
  //     category: this.state.category,
  //     description: this.state.description,
  //     size: this.state.size,
  //     remaining: this.state.remaining,
  //     photo: this.state.photo,
  //   }
  //   this.props.updateProduct(productToUpdate, this.props.params.productId)
  //   return
  // }

  render(){
    return(
      <div>
        <div className="page-header col-xs-12">
          <h1>Update {this.props.name}</h1>
        </div>
        
        <form onSubmit={this.props.updateProduct}>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label>Product Name</label>
              <input 
                type="text" 
                onChange={(e) => this.props.updateField('name', e)} 
                className="form-control"
                value={this.props.name} 
                name="name"/>
            </div>

            <div className="form-group">    
              <label>Price</label>
              <input 
                type="text" 
                onChange={(e) => this.props.updateField('basePrice', e)} 
                className="form-control"
                value={this.props.basePrice} 
                name="basePrice" />
            </div>
          

            <div className="form-group">
              <label>Description</label>
              <textarea
                onChange={(e) => this.props.updateField('description', e)} 
                className="form-control"
                value={this.props.description} 
                name="description" />
            </div>

            <div className="form-group">
              <div>
                <label>Category</label>
              </div>
              <select 
                name="category"
                onChange={(e) => this.props.updateField('category', e)}>
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
                onChange={(e) => this.props.updateField('size', e)}>
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
                onChange={(e) => this.props.updateField('remaining', e)} 
                className="form-control"
                value={this.props.remaining} 
                name="remaining" />
            </div>

            <div className="form-group">          
              <label>Photo</label>
              <input 
                type="text" 
                onChange={(e) => this.props.updateField('photo', e)} 
                className="form-control"
                value={this.props.photo} 
                name="photo" />
            </div>

            <img src={this.props.photo} className="img-responsive"/>
          </div>

          <div className="col-xs-12">
            <button type="submit" className="btn btn-primary">Update Product</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return state.products[ownProps.params.id];
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProduct(productObj, productId) {
      dispatch(updateProduct(productObj, productId))
    },
    
    updateField(field, event) {
      dispatch(updateAdminProductForm(field, event.target.value));
    },

    resetForm() {
      dispatch(resetProductUpdateFrom());
    }
  }
}

const UpdateProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProduct);

export default UpdateProductContainer