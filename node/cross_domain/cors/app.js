const koa = require('koa')
const app = new koa();
const router = require('koa-router')();
const cors = require('koa-cors');

app.use(cors({
  origin: (ctx) => {// 配置白名单， 只允许一些可以跨域请求
    return 'http://localhost:8080'
  },
  maxAge: 5, // 表现请求不超过5秒
  allowMethods: ['GET', 'POST', 'DELETE'], // 支持跨域请求方法
  allowHeaders: ['Content-Tyep', 'Authorization', 'Accept'], // 请求头
  credentials: true // cookie 允许跨域请求允许的cookie
}))
router.get('/', async(ctx) => {
  const data = {uid: 100};
  // const callback = ctx.request.query.callback || null;
  ctx.body = data;
})
router.post('/', async(ctx) => {
  const data = {uid: 1000, msg: '非简单'};
  ctx.body = data;
})
app.use(router.routes())
.use(router.allowedMethods);

app.listen(3000, function(){
  console.log('server is running')
})