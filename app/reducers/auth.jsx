import axios from 'axios';
import { browserHistory } from 'react-router';

import { signUpSuccess, signUpFail } from './errors';

const AUTHENTICATED = 'AUTHENTICATED';

export const authenticated = user => ({
  type: AUTHENTICATED,
  user, // user instance object from Sequelize
});

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      { username, password })
      .then(() => {
        dispatch(whoami());
        browserHistory.push('/products');
      })
      .catch(() => dispatch(whoami()));

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(whoami());
        browserHistory.push('/login');
      })
      .catch(() => dispatch(whoami()));

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then((res) => {
        const user = res.data;
        dispatch(authenticated(user));
      })
      .catch(failed => dispatch(authenticated(null)));

export const signUpForAccount = (userAndAddress) => {
  return (dispatch) => {
    const { email, password } = userAndAddress.userInfo;
    axios.post('/api/users', userAndAddress)
      .then(() => {
        dispatch(signUpSuccess());
        dispatch(login(email, password));
        browserHistory.push('/products');
      })
      .catch(err => dispatch(signUpFail(err)));
  };
};

export default (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;
    default:
      return state;
  }
};
