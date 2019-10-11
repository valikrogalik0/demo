import { call, put, fork, takeEvery } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL
} from "../constants";
import { ORIGIN } from "../../../constants";

import { loginRequestSuccess, loginRequestFail } from "../actions";

function* saveUserSession() {}

function* sendAuthorizationRequest() {
  console.log("works");

  try {
    const response = yield call(fetch, ORIGIN);
    yield console.log(response);

    yield put(loginRequestSuccess());
    yield fork(saveUserSession);
  } catch (error) {
    yield put(loginRequestFail());
  }
}

export function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, sendAuthorizationRequest);
}
