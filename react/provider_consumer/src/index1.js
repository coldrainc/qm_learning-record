import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'

// provider store => Component => diaptch => store
// 同步的 action async

const reducers = combineReducers({
  films: (state = [], action) => {
    let {type, payload} = action;
    switch(type) {
      case 'GET_FILM_DATA':{
        var newS = [...state];
        newS = payload;
        return newS;
      }
      default:
        return state;
    }
  }
})
const store = createStore(reducers);

function renderPage() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

renderPage();
store.subscribe(renderPage);