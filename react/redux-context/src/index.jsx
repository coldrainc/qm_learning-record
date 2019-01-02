import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from './redux'

const state = {
        head: '我是全局head',
        body: '我是全局body',
        headBtn: '修改head',
        bodyBtn: '修改body'
      }
ReactDOM.render(
  <Provider store={state}>
    <App/>
  </Provider>
  , document.getElementById('root'));
