import axios from 'axios';
import { browserHistory } from 'react-router';

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
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then((res) => {
        const user = res.data;
        dispatch(authenticated(user));
      })
      .catch(failed => dispatch(authenticated(null)));

export default (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;
    default:
      return state;
  }
};
