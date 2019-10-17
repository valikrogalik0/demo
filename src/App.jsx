import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound'
import { HOME, LOGIN } from './constants/Routes';
import store, { history } from './store';
import withAuth from './hocs/withAuth';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route 
            exact
            path={HOME}
            component={withAuth(true)(Home)}
          />
          <Route
            exact
            path={LOGIN}
            component={withAuth(false)(Login)}
          />
          <Route 
            children={NotFound}
          />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
};

export default App;
