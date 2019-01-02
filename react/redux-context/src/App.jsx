import React, {Component} from 'react';
import Head from './components/Head';
import Body from './components/Body';
// import PropTypes from 'prop-types';


export default class App extends Component {
  // 这个属性的值， 在内部打破层次， 拿到在顶级组件中共享的状态
  // static childContextTypes = {
  //   store: PropTypes.object,
  //   dispatch: PropTypes.func,
  //   subscribe: PropTypes.func,
  //   getStore: PropTypes.func
  // }
  //  把store放到Context, 子孙组件就可以获取数据
  // getChildContext 返回的必须在childContextTypes中定义类型
  // getChildContext () {
  //   const state = {
  //     head: '我是全局head',
  //     body: '我是全局body',
  //     headBtn: '修改head',
  //     bodyBtn: '修改body'
  //   }
  //   const { store, dispatch, subscribe, getStore } = createStore(state, storeChange);
  //   return {store, dispatch, subscribe, getStore}
  // }
  render() {
    return (
      <div className="App">
        <Head/>
        <Body/>
      </div>
    )
  };
}