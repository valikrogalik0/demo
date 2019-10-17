import { all } from "redux-saga/effects";
import LoginSagas from "../components/Login/sagas";
import * as HomeSagas from '../components/Home/sagas';
import { watchUserLogout } from './user/sagas';

export default function* rootSaga() {
  yield all([
    LoginSagas.watchLoginRequest(),
    HomeSagas.watchSidebarRequest(),
    watchUserLogout(),
  ]);
}
