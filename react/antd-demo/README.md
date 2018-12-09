# react antd

- 一切资源皆可打包 webpack bundle
  import logo from './logo.svg' 图片也可以引入到js中， 参与js的运算
  在react里引入css img

- 组件？
  封装了或组合了一些HTML， 完成一个特定的功能， 并以一个自定义标签的形式向外提供， html， css，js
  antd UI 风格， 小蚂蚁 大力量， 配置优先

- 路由接管一切， 配置在最前面

  <Router>
    <Route >
    </Route>
  </Router>
  有两种路由， BrowserRouter(高级浏览器 mobile， url更好理解) HashRouter(兼容性好)
  history.pushState();