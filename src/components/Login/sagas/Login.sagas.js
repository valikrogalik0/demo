import { call, put, fork, takeEvery } from "redux-saga/effects";
import { push } from 'connected-react-router'
import { LOGIN_REQUEST } from "../constants";
import { ORIGIN } from "../../../constants/URLs";
import { HOME } from '../../../constants/Routes';
import getFormDataFromPayload from '../../../helpers/getFormDataFromPayload';
import { loginRequestSuccess, loginRequestFail } from "../actions";

function saveUserSession(authSession) {
  localStorage.setItem('auth_session', authSession);
}

function fetchLoginSession(formData) {
  return fetch(`${ORIGIN}current-user/login-session`, {
    method: "POST",
    credentials: "include",
    body: formData
  }).then(response => response.json())
    .then(responseJSON => {
      const { success } = responseJSON;

      if (!success) {
        const { message } = responseJSON;
        throw message;
      }

      return responseJSON;
    });
}

function* sendAuthorizationRequest(action) {
  try {
    const { payload } = action;
    const formData = getFormDataFromPayload(payload);

    const response = yield call(fetchLoginSession, formData);
    const { session_key, user } = response;

    yield fork(saveUserSession, session_key);
    yield put(loginRequestSuccess(user));
    yield put(push(HOME));
  } catch (errorMessage) {
    yield put(loginRequestFail(errorMessage));
  }
}

export function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, sendAuthorizationRequest);
}
