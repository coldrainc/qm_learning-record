# 路由

hashchange事件， 组件的动态加载
hashtag => url 的一部分

- 传统的地址切换有一下问题
  1. 重度依赖于 http协议
    当只有后端路由时， 重新生成html页面 新的页面会有新的dom渲染的过程， 比较慢， 影响体验
- 新时代的路由
  history api， 或有hashtag 不会产生页面的跳转， 捕捉到事件， 马上切除对应的组件，

- history API
  url 访问， 都是浏览器中的一个访问记录， 就是数据结构里的栈
  pushState(null, null, '#/hello')入栈一个浏览历史 pop
  给我们的访问新增一个记录， 但是不会刷新页面， 得到一个popstate事件，页面组件的切换
  前端路由已经成熟， 既可以hash亦可以path 切换， 全部交给pushState