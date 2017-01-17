import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () =>
  (dispatch) => {
    axios.get('/api/users')
      .then(res => res.data)
      .then((payload) => {
        dispatch({ type: FETCH_USERS, payload });
      })
      .catch((err) => {
        console.error('Error fetching users in reducers/users.jsx:', err);
      });
  };

export const switchRole = (userId, newRole) =>
  (dispatch) => {
    axios.put(`/api/users/${userId}`, { type: newRole })
      .then(res => res.data)
      .then((payload) => {
        dispatch(fetchUsers());
      })
      .catch((err) => {
        console.error('Error updating user role reducers/users.jsx:', err);
      });
  };

// Reducer
export default (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_USERS:
      newState = action.payload;
      break;
    default:
      return state;
  }
  return newState;
};
