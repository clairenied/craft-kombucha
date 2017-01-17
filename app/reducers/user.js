import axios from 'axios';
import { browserHistory } from 'react-router';

import { login } from '../reducers/auth';

const initialState = {
  error: '',
};

const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signUpForAccount = (userAndAddress) => {
  return (dispatch) => {
    const { email, password } = userAndAddress.userInfo;
    axios.post('/api/users', userAndAddress)
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
        dispatch(login(email, password));
        browserHistory.push('/products');
      })
      .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
  };
};

// Reducer
export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case SIGNUP_SUCCESS:
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
