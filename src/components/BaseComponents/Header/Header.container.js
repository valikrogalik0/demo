import { connect } from 'react-redux'
import { logout } from '../../../core/user/actions';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Header);
