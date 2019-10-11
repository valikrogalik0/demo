import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST
} from "../constants";

const initialState = {
  isLoginFetch: false,
  error: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoginFetch: true,
        error: false
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoginFetch: false
      };
    case LOGIN_REQUEST_FAIL:
      return {
        isLoginFetch: false,
        error: true
      };
    default:
      return state;
  }
};

export default login;
