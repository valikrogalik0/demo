import { call, put, fork, takeEvery } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL
} from "../constants";
import { ORIGIN } from "../../../constants";

import { loginRequestSuccess, loginRequestFail } from "../actions";

function* saveUserSession() {}

function* sendAuthorizationRequest(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(fetch, `${ORIGIN}/login`, {
      method: "POST",
      credentials: "include",
      mode: "no-cors",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: {
        email,
        password
      }
    });

    yield console.log(response, response.body);

    yield put(loginRequestSuccess());
    yield fork(saveUserSession);
  } catch (error) {
    yield put(loginRequestFail());
  }
}

export function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, sendAuthorizationRequest);
}
