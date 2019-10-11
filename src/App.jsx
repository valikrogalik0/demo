import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {HOME, LOGIN} from './constants';

import rootReducer from './core/reducers';

import rootSaga from './core/sagas'
  
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)

const App = () => {
  const isAuth = localStorage.getItem("isAuth");
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route 
            exact
            path={HOME}
            render={() =>
              isAuth ? <Home /> : <Redirect to={{ pathname: LOGIN }}/>
            }
          />
          <Route
            exact
            path={LOGIN}
            render={() => <Login />}
          />
          <Route 
            children={NotFound}
          />
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
