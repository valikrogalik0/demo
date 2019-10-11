import { connect } from "react-redux";

import { loginRequest } from "./actions";

import Login from "./Login";

const mapStateToProps = state => ({
  isLoginFetch: state
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => dispatch(loginRequest({ email, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
