const koa = require('koa')
const app = new koa();
const router = require('koa-router')();

router.get('/', async(ctx) => {
  const data = {uid: 100};
  const callback = ctx.request.query.callback || null;
  if(callback) {
    ctx.body = `${callback}(${JSON.stringify(data)})`
  } else {
    ctx.body = data;
  }
})

app.use(router.routes())
.use(router.allowedMethods);

app.listen(3000, function(){
  console.log('server is running')
})