import { put, takeEvery } from "redux-saga/effects";
import { push } from 'connected-react-router';
import { LOGOUT } from '../constants/user.actions.constants';
import { LOGIN } from '../../../constants/Routes';

function* userLogout() {
  localStorage.removeItem('auth_session');
  yield put(push(LOGIN));
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT, userLogout);
}
