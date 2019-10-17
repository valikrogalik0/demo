import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './core/coreReducers';
import rootSaga from './core/coreSagas';

export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  ))
);

sagaMiddleware.run(rootSaga);

export default store;