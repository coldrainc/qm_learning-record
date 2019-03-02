import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers"
import storageMiddleware from "./storageMiddleware"
import {composeWithDevTools} from 'redux-devtools-extension'

// 创建store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(storageMiddleware))// 使用中间件
);
export default store
