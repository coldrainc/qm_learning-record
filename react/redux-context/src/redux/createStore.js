export const createStore = (state, storeChange) => {
  // 订阅， 发布者模式
  const listeners = [];
  let store = state || {};
  // let dispatch = (action) => storeChange(state, action); 
 
  // 将需要每一个listen订阅者放入， 在使用dispatch更新的时候再执行一次，state更新重新渲染
  const subscribe = (listen) => {
    listeners.push(listen);
  }
  let dispatch = (action) => {
    const newStore = storeChange(store, action);
    store = newStore;
    // dispatch 导致store更新后 就让所有的listener在重新执行一下
    listeners.forEach(item => item());
  }
  const getState = () => {
    return store;
  }
  // storeChange就是reducer 这段就是返回一个通过reducer返回一个新的store
  return {
    store,
    dispatch,
    subscribe,
    getState
  }
}