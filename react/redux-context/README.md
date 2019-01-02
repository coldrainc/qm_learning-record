# redux

redux 父子组件， 兄弟组件传值很麻烦
context 新的希望 react-redux 基于它的全局状态
打破层次关系， 实现共享
redux? context

- context API redux 依靠它
  childContextTypes = {
    store: PropTypes.Object
  }
  getChildContext () {
    return {store: {}}
  }

- childContextTypes 顶层组件中规定类型
- getChildContext 顶层组件中设置数据
- contextTypes 后代组件中规定类型
- this.context 后代组件中获取顶层组件的数据

太烦了， 不是react 数据流的语法的烦， 是代码的重复
context api 代码的重复 dry dont repeat your self
声明周期 _upState() contextTypes connect
connect react-redux HOC(高阶组件) 就是将context api封装

- connect 封装， 有关的context的操作都交给它
- 后代组件不受影响， 只需要做自己的事