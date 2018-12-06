# react router Prop-types

军队在危急时接管城市
应用只是页面？ 当然要路由， 路由接管一切。
按url 分发组件 （page级别组件）
根路由App
  -> 页面A级别组件(Page) -> (容器组件Container -> 函数式组件present)
  -> path '/' 页面B级别组件（Page）-> (容器组件Container -> 函数式组件(Present))

- Link
  a 太弱了， 所以react-router 给了我们Link组件
  to href params ... 满足单页应用需要的一切
- H5 history api 更新url ， 页面不用刷新
- ref react 里的id 利用它找到元素
  React.createRef() 返回一个不重复的id
  this.searchRef.current
- context(上下文环境) 最后一个大佬 component lifecycle state， 事件 函数式组件
  this.context.router.history.push(`/search/${...}`)