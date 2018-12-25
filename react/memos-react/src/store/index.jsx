import { createStore, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';


function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    typeof window.devToolsExtension === 'function' ? window.devToolsExtension(): f => f
  ), composeWithDevTools());
  return store;
}

export default configureStore;
