import { combineReducers } from 'redux';
import sidebarReducer from './sidebar.reducer';

export default combineReducers({
  sidebar: sidebarReducer,
});