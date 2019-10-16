import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import {HOME, LOGIN} from './constants';

import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound'

import withAuth from './helpers'

const App = () => {
  // const history = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={LOGIN} component={Login}/>
        <Route component={NotFound} />
      </Switch>

    </Router>
  )
};

export default App;
