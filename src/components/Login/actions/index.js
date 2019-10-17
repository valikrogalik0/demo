import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL
} from "../constants";

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password }
});

export const loginRequestSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS
});

export const loginRequestFail = error => ({
  type: LOGIN_REQUEST_FAIL,
  payload: error,
});
