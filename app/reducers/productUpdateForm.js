const initialState = {
  name: '',
  basePrice: 0,
  category: '',
  description: '',
  size: '',
  remaining: 0,
  photo: '',
};

export default (state = initialState, action) => {
  let nextState = { ...state };
  switch (action.type) {
    case UPDATE_PRODUCT_UPDATE_FORM_FIELD:
      nextState[action.field] = action.value;
      break;
    case RESET_PRODUCT_UPDATE_FORM:
      nextState = { ...initialState };
    default:
      return state;
  }
  return nextState;
};

const RESET_PRODUCT_UPDATE_FORM = 'RESET_PRODUCT_UPDATE_FORM';
export const resetProductUpdateForm = () => ({
  type: RESET_PRODUCT_UPDATE_FORM
});

const UPDATE_PRODUCT_UPDATE_FORM_FIELD = 'UPDATE_PRODUCT_UPDATE_FORM_FIELD';
export const updateAdminProductForm = (field, value) => ({
  type: UPDATE_PRODUCT_UPDATE_FORM_FIELD,
  field,
  value,
});


export const populateProductUpdateForm = product => {
  return dispatch => {

    Object.keys(product)
      .forEach(key => dispatch(updateAdminProductForm(key, product[key])))

    Object.keys(product.producttype)
      .forEach(key => dispatch(updateAdminProductForm(key, product.producttype[key])))
  }
}

