import { createStore, combineReducers} from 'redux';
var reducer_0 = function(state={}, action) {
  switch(action.type) {
    case 'SAY_SOMETHING': 
      return {
        ...state,
        message: action.value
      }
    default:
      return state;
  }
}

var userReducer = (state={}, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

var rootReducer = combineReducers({
  reducer_0,
  user: userReducer
})

var store = createStore(rootReducer);