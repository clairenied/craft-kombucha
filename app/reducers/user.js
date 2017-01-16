import axios from 'axios';

const initialState = {
  loggedIn: false,
  amAdmin: false,
  name: '',
  error: '',
};

const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signUpForAccount = (userAndAddress) => {
  return (dispatch) => {
    axios.post('/api/users', userAndAddress)
      .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
  };
};

// Reducer
export const userReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case SIGNUP_SUCCESS:
      nextState.loggedIn = true;
      nextState.name = action.payload.firstName;
      nextState.error = '';
      break;
    case SIGNUP_FAIL:
      nextState.error = action.payload;
      break;
    default:
      return state;
  }
  return nextState;
};
