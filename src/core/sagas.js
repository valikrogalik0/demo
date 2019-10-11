import { all } from "redux-saga/effects";
import LoginSagas from "../components/Login/sagas";

export default function* rootSaga() {
  yield all([LoginSagas.watchLoginRequest()]);
}
