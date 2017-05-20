/**
 * Created by jay on 1/5/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './stylesheets/main.scss';
import { Provider } from 'react-redux';
import App from './components/App';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { reducers } from './reducers/index';
import { createStore, applyMiddleware, compose  } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './sagas/index';

// create the store
const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware);
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
}
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app')
);
