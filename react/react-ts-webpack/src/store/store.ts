import { createStore, applyMiddleware, compose } from 'redux';
import indexReducer from '../reducer/IndexReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

import Window = index.Window;
declare var window: Window;
export default (initStore) => createStore(indexReducer, initStore,composeWithDevTools());

