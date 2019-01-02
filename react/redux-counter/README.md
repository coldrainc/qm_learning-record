# redux

- 代码结构
  store
    状态仓库 状态多， 管理
    共享状态 getState setState
    共享和管理 财务部
- 组件通信
  api
  统一状态树 Store 唯一的
  1. store.getState() 读
  2. store.dispatch({type: 'INCREMENT'})
    相应的reducer 得以计算返回的心状态
    MVVM