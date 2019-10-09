import React from "react";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../constants";

const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const history = useHistory();
      const fakeAuth = false;

      return fakeAuth ? <Component {...this.props} /> : history.push(LOGIN);
    }
  };
};

export default withAuth;
