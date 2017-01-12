import axios from 'axios';

// const initialState = {
//   allUsers: [],
// };

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

const SWITCH_ROLE = 'SWITCH_ROLE';
export const switchRole = (userId, newRole) =>
  (dispatch) => {
    axios.put(`/api/users/${userId}`, { type: newRole })
      .then(res => res.data)
      .then((payload) => {
        console.log('payload:', payload);
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

// export default (state = initialState, action) => {
//   const newState = Object.assign({}, state);
//   switch (action.type) {
//     case FETCH_USERS:
//       newState.allUsers = action.payload;
//       break;
//     default:
//       return state;
//   }
//   return newState;
// };
