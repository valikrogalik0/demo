import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';


// Import all the library reducers
import login from "../components/Login/reducers";
import home from "../components/Home/reducers";

export default (history) => combineReducers({
  login,
  home,
  router: connectRouter(history),
});
