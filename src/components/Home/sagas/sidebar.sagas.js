import { call, put, takeEvery } from "redux-saga/effects";
import { HOME_PAGE_SIDEBAR_FETCH } from "../constants/sidebar.actions.constants";

import { fetchSidebarFailed, fetchSidebarSuccess } from "../actions/sidebar.actions";
import {ORIGIN} from '../../../constants/URLs';

function fetchSidebar() {
  return fetch(`${ORIGIN}sidebar?organizationID=8`, {
    method: "GET",
    credentials: "include",
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

function* attemptToLoadSidebar() {
  try {
    const response = yield call(fetchSidebar);
    const { success, ...sidebar } = response;

    yield put(fetchSidebarSuccess(sidebar));
  } catch (errorMessage) {
    yield put(fetchSidebarFailed(errorMessage));
  }
}

export function* watchSidebarRequest() {
  yield takeEvery(HOME_PAGE_SIDEBAR_FETCH, attemptToLoadSidebar);
}
