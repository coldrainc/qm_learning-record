# js

为了封装性，易用性， 代码可读性，
将弹幕的业务逻辑(独立的) 封装成一个类， 并将其模块化
直接在浏览器端引入(执行)export default;
import 模块化关键字，浏览器目前还没有支持，
async 最近版本， syntax
如何用面向未来的编码风格， 又编译用过
写的代码， compile 最后执行的代码不一样，
webpack
  test .js
    babel-loader

webpack-dev-server http server 在这之前， 他会先compile webpack
entry (入口引入更深层次的文件)
module test loader
output(出口)

- canvas 业务逻辑
  render() 负责一直画
  递归 requestAnimationFrame(this.render.bind(this))使得递归的时候this始终指向对象
  renderBarrage()
  clearRect()

- barrage 集合
  那些是可以画的？ time完了后要回收， item.flag = true
  render()

代码思想
  面向对象 对象的职责和公共
  容器对象，canvas video data render() 负责一直画(递归 + x更新)
  业务细节对象 data item 属性 render() 画出文字constructor