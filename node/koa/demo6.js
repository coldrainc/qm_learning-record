const Koa = require('koa')
const app = new Koa();
const compose = require('koa-compose')
// 多个中间件合成

const logger = (ctx, next) => {
  console.log(`${Date.now()}${ctx.request.method}${ctx.request.url}`)
  next();
}
const main = (ctx) => {
  ctx.response.body = 'hello compose';
}
const middleware = compose([logger, main])
app.use(middleware)
app.listen(3000, function(){
  console.log('Hello World')
})