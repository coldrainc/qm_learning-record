import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import Counter from './Counter'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxLogger, sagaMiddleware)));
// saga 可以run一下异步的动作， 使用的发布订阅者模式 后面可以传一个数组
sagaMiddleware.run(rootSaga)
const action = type => store.dispatch({type})
// const doAsyncIncrement = () => {
//   // 因为在业务中的异步超出了redux的范围
//   setTimeout(() => {
//     action('INCREMENT_ASYNC')
//   }, 1000)
// }

function render() {
  ReactDOM.render( 
    <Counter 
      value={store.getState().counter}
      // 这个地方的action通过saga中间件来处理异步请求后，然后再put一个redux可以处理的action的INCREMENT
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />
  , document.getElementById('root'))
}

render()
store.subscribe(render);