const Koa = require('koa');
const app = new Koa();
const router = require('./route')

app.use(router.routes())
.use(router.allowedMethods())
app.listen(8080, function() {
  console.log('Server is running')
})