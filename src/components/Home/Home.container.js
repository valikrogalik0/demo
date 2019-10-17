import { connect } from "react-redux";
import { fetchSidebar } from './actions/sidebar.actions';
import { makeSidebarItems } from './selectors/sidebar.selectors';
import Home from './Home'

const makeMapStateToProps = () => {
  const getSidebarItems = makeSidebarItems();

  return state => {
    return {
      isFetchingSidebar: state.login.isLoginFetch,
      sidebarFetchError: state.login.error,
      sideBarItems: getSidebarItems(state),
    }
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSideBar: () => dispatch(fetchSidebar()),
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Home);