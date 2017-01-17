import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import store from '../store';


import { updateProduct } from '../reducers/products';

import { updateAdminProductForm, resetProductUpdateFrom } from '../reducers/productUpdateForm';

const UpdateProduct = (props) => {
  return(
    <div>
      <div className="page-header col-xs-12">
        <h1>Update {props.name}</h1>
      </div>
      
      <form onSubmit={props.updateProduct}>
        <div className="col-xs-12 col-sm-6">
          <div className="form-group">
            <label>Product Name</label>
            <input 
              type="text" 
              onChange={(e) => props.updateField('name', e)} 
              className="form-control"
              value={props.name} 
              name="name"/>
          </div>

          <div className="form-group">    
            <label>Price</label>
            <input 
              type="text" 
              onChange={(e) => props.updateField('basePrice', e)} 
              className="form-control"
              value={props.basePrice} 
              name="basePrice" />
          </div>
        

          <div className="form-group">
            <label>Description</label>
            <textarea
              onChange={(e) => props.updateField('description', e)} 
              className="form-control"
              value={props.description} 
              name="description" />
          </div>

          <div className="form-group">
            <div>
              <label>Category</label>
            </div>
            <select 
              name="category"
              onChange={(e) => props.updateField('category', e)}>
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
              onChange={(e) => props.updateField('size', e)}>
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
              onChange={(e) => props.updateField('remaining', e)} 
              className="form-control"
              value={props.remaining} 
              name="remaining" />
          </div>

          <div className="form-group">          
            <label>Photo</label>
            <input 
              type="text" 
              onChange={(e) => props.updateField('photo', e)} 
              className="form-control"
              value={props.photo} 
              name="photo" />
          </div>

          <img src={props.photo} className="img-responsive"/>
        </div>

        <div className="col-xs-12">
          <button type="submit" className="btn btn-primary">Update Product</button>
        </div>
      </form>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return state.productUpdateForm;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProduct(productObj, productId) {
      dispatch(updateProduct(store.getState(), ownProps.params.productId))
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