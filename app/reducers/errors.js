const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const signUpSuccess = () => ({ type: SIGNUP_SUCCESS });

const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const signUpFail = payload => ({ type: SIGNUP_FAIL, payload });

// Reducer
export default (state = '', action) => {
  let nextState;

  switch (action.type) {
    case SIGNUP_SUCCESS:
      nextState = '';
      break;
    case SIGNUP_FAIL:
      nextState = action.payload;
      break;
    default:
      return state;
  }
  return nextState;
};
