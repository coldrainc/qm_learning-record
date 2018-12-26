import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider, connect} from 'react-redux';

// actionTypes 常量， 声明动作类型
// 统一查看管理及修改
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';


const initialState = {
  visiblity: {
    visible: true
  },
  counter: {
    value: 0
  }
}

// state 代表着那颗状态树， 多个reducer 有多个分支， 命名空间
const getVisibility = state => {
  // console.log(state)
  return state.visiblity.visible;
}
const getCounterValue = state => {
  return state.counter.value;
}

function visiblityReducer(state=initialState.visiblity, action) {
  switch(action.type) {
    case CHANGE_VISIBILITY: {
      return {
        visible: action.visible
      }
    }
    default:
      return state
  }
}

const add = () => {
  return {
    type: 'ADD'
  }
}
const subtract = () => {
  return {
    type: 'SUBTRACT'
  }
}
const changeVisibility = (value) => {
  return {
    type: 'CHANGE_VISIBILITY',
    visible: value
  }
}
function counterReducer(state=initialState.counter, action) {
  switch(action.type) {
    case ADD: {
      return {value: state.value + 1}
    }
    case SUBTRACT:
      return { value: state.value - 1}
    default: 
      return state;
  }
}

// 多个reducer有combinReducer合并， 将应用的state设计模块化
const rootReducer = combineReducers({
  visiblity: visiblityReducer,
  counter: counterReducer
})

// redux架构影响了组件的设计为 函数表现型组件， 加connect设计了state， dispatch的高阶容器型组件
const Counter = ({value, add, subtract}) => {
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}

const CounterConnected = connect(state => ({
  value: getCounterValue(state)
}), dispatch => ({
  add: () => {
    dispatch(add());
  },
  subtract: () => {
    dispatch(subtract());
  }
}))(Counter);

const App = ({ visible }) => (
  <div>
    <VisiblityConnected />
    {visible && <CounterConnected/>}
  </div>
);
const Visibilty = ({changeVisibility}) => (
  <div>
    <button onClick={() => changeVisibility(true)}>Visible</button>
    <button onClick={() => changeVisibility(false)}>Hidden</button>
  </div>
);
const VisiblityConnected = connect(null, dispatch => ({
  changeVisibility: value => dispatch(changeVisibility(value))
}))(Visibilty);

const AppConnected = connect(
  state => ({// state拿到所有的reducer state.visible是reducer也就是visibel返回的state
    visible: getVisibility(state)
  })
)(App);

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <AppConnected></AppConnected>
  </Provider>
  , document.getElementById('root')
)

