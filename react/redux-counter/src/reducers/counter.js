
// 提供状态（可以被action计算的状态）
// 视图与状态是一一对应的
// 所有的状态保存在一个对象中
// 一蹴而就， reducer 函数 单纯的就负责提供计算状态
// state = 0 初始值 变化action
// 生命周期请求了数据， 用户进行操作， action
// UI状态的前边万化 对应state的值
// state用完就扔

// reducer 负责返回计算后的状态
const initialState = {
  counter: 0
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {counter: state.counter+1};
    case 'DECREMENT':
      return {counter: state.counter-1};
    default:{
      return state;
    }
  }
}