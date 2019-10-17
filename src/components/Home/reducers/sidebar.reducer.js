import {
  HOME_PAGE_SIDEBAR_FAILED,
  HOME_PAGE_SIDEBAR_FETCH,
  HOME_PAGE_SIDEBAR_SUCCESS
} from "../constants/sidebar.actions.constants";

const initialState = {
  isSidebarFetching: false,
  items: null,
  error: false,
};

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_SIDEBAR_FETCH:
      return {
        ...state,
        isLoginFetch: true,
      };
    case HOME_PAGE_SIDEBAR_SUCCESS:
      return {
        ...state,
        items: { ...action.payload },
        isLoginFetch: false,
        error: '',
      };
    case HOME_PAGE_SIDEBAR_FAILED:
      return {
        ...state,
        isLoginFetch: false,
        error: true
      };
    default:
      return state;
  }
};

export default sideBarReducer;
