const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa-cors')

const app = new Koa()
const apiRouter = new Router()

app.use(cors({
  origin: (ctx) => {
    return 'http://locahost:8080'
  }
})) 

apiRouter.get('/', async(ctx) => {
  ctx.body = {msg: 'Hello World'};
})

app.use(apiRouter.routes())
.use(apiRouter.allowedMethods());

app.listen(8080, function() {
  console.log('Server is running');
})