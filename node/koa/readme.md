# koa

- 启动web server
  http server 3000 伺服

  用户request(n) 中间件(函数) response (访问结束)

  图片/css/js/text， 都给他们构建url 静态资源服务

  中间件有顺序的， 当有多个中间件，使用next去下一个中间件
  当碰到 response.body 退出中间件的循环，给出结果