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
  const history = useHistory();
  return (
    <Router>
      <button onClick={() => history.push('hello')} >click</button>
      <Switch>
        <Route 
          exact
          path={HOME}
          children={withAuth(Home)}
        ><Home /></Route>
        <Route 
          exact
          path={LOGIN}
          children={Login}
        />
        <Route 
          children={NotFound}
        />
      </Switch>
    </Router>
  )
}
export default App;
