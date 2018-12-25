import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store';
import App from './App';

import AllMemosRoute from './actions';
import TodoRoute from './actions';
import DoingRoute from './actions';
import DoneRoute from './actions';
import './main.less';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <App>
        <Route path='/' exact component={AllMemosRoute}></Route>
        <Route path='/todo' component={TodoRoute}></Route>
        <Route path='/doing' component={DoingRoute}></Route>
        <Route path='/done' component={DoneRoute}></Route>
        <Route></Route>
        <Route></Route>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));
