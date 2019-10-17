import {
  HOME_PAGE_SIDEBAR_FAILED,
  HOME_PAGE_SIDEBAR_FETCH,
  HOME_PAGE_SIDEBAR_SUCCESS
} from "../constants/sidebar.actions.constants";

export const fetchSidebar = () => ({
  type: HOME_PAGE_SIDEBAR_FETCH,
});

export const fetchSidebarSuccess = items => ({
  type: HOME_PAGE_SIDEBAR_SUCCESS,
  payload: items,
});

export const fetchSidebarFailed = () => ({
  type: HOME_PAGE_SIDEBAR_FAILED,
});
