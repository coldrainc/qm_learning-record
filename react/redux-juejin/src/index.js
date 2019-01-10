import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import { Provider } from 'react-redux'

import store from './redux/store';
import App from './containers/App';

import './index.css';
import 'reset.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);