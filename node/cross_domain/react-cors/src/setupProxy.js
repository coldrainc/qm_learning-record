const proxy = require('http-proxy-middleware')
// http://localhost:3000/api 代理到 http://localhost:8080/
module.exports = function(app) {
  app.use(proxy('/api', {
    "target": "http://localhost:8080", // 代理地址
    "changeOrigin": true, // 允许跨域
    "pathRewrite": {
      '^/api': ''
    }
  }))
}