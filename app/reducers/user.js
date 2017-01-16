import axios from 'axios';

const initialState = {
  loggedIn: false,
  amAdmin: false,
};

const SIGN_UP = 'SIGN_UP';
export const signUpForAccount = (userAndAddress) => {
  return (dispatch) => {
    console.log('hi i hit');
    axios.post('/api/users', userAndAddress)
      .then(res => res.data)
      .then(data => data)
      .catch(err => console.error('USER reducer error (user)', err));
  };
};


// Reducer

