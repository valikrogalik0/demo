import React from 'react';
import { Redirect } from 'react-router';
import { LOGIN, HOME } from '../../constants/Routes';

export default function(isAuthRoute) {
  return function (Component) {
    return function WithAuth(props) {
      const isAuth = localStorage.getItem('auth_session');

      if (!isAuthRoute && isAuth) {
        return <Redirect to={{ pathname: HOME }} />
      }

      if (isAuthRoute && !isAuth) {
        return <Redirect to={{ pathname: LOGIN }} />
      }

      if ((isAuthRoute && isAuth) || (!isAuth && !isAuthRoute)) {
        return <Component {...props} />
      }
    }
  }
}