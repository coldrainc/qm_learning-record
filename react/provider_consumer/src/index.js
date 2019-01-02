import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';

const reducers = combineReducers({
  films: function(state=[], action) {
    switch(action.type) {
      case 'GET_FILM_DATA': {
        return action.payload;
      }
      default: 
        return state
    }
  }
})

const store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
)