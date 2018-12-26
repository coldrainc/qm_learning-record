import {combineReducers, createStore } from 'redux'
import { create } from 'domain';


var userReducer = function (state = {}, action) {
  console.log('userReducer was called with state', state, 'and action', action)

  switch (action.type) {
      case 'SET_NAME':
          return {
            ...state,
            name: action.name
          }
      default:
          return state;
  }
}
var itemsReducer = function (state = [], action) {
  console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
      case 'ADD_ITEM':
          return [
              ...state,
              action.item
          ]
      default:
          return state;
  }
}

var store = createStore(combineReducers({
  user: userReducer,
  item: itemsReducer
}));

store.dispatch({type: 'ADD_ITEM', item: 'test'});
