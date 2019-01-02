import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import counter from './reducers/counter';
import Counter from './components/Counter';

// 单独管理状态的地方
// 状态与UI 统一的， 状态计算器 reducer
const store = createStore(counter, composeWithDevTools());

const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
  />, rootEl
);
render();
store.subscribe(render); //subscribe订阅 store发布者 render订阅者 当store改变 render将会重新渲染