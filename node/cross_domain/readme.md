# 跨域

- cookie
  网站为了识别身份，进行session跟踪而储存在用户本地的数据
  服务端和客户端都可以 操作和访问
  后端 ctx.cookie.set 前端 document.cookie 形式是隔开的key：value
  1. path 选项
    指定cookie有效的路径
  2. http-only
    true js 无法获取cookie的值， 增强了cookie的安全性

跨域
同源：协议， 域名， 端口一致
同源策略将会拒绝跨域请求

当你的电脑同时如下两个操作
1 A 网银网站 Cookie
2 QQ  澳门赌场 如果没有同源机制 将会读取到网银cookie
3 同源机制不允许

book.douban.com movie.douban.com 可能在不同部门需要协作，
前端工程进化，前后端分离， vue 8080， koa api 3000

解决同源策略的两种跨域方案

- jsonp
  1. 不允许跨域的读操作
  2. 跨域资源嵌入， 使用img标签 src scritp[src]
  前后端
  优势是兼容性好
  缺点是只能使用GET， 需要服务端和客户端两端都修改
- cors
  由W3C推荐的新的方案， 服务器端支持XMLHttpRequest的跨域请求
  服务器端的一种解决方法
  有点是， 只在后端就可以解决同源策略
  简单，
  非简单 POST DELETE
  - 白名单 origin 需要的跨域才进行相应，否则也无法跨域

- react 前后端分离
  1. 本地代理 proxy
    create-react-app 3000 UI 请求转发给8080端口
    proxy http://localhost:3000/api http://localhost:8080/api
    koa 8080 端口
    create-react-app 在package里面添加proxy代理就会将所有的请求代理到代理也就是这里的http://localhost:8080