const Koa = require('koa');
const app = new Koa();
const fs = require('fs-promise');
const router = require('koa-router')();

const Port = 3000;
const main = async(ctx, next) => {
  ctx.response.type = 'html';
  // 去查数据库， 文件处理， IO操作等后端异步任务
  // 中间件next一直访问下一个中间件，当碰到next的时候就会终止
  ctx.response.body = await fs.readFile('./template.html', 'utf8')
}

router.get('/', main)

app.use(router.routes())
  .use(router.allowedMethods());
app.listen(Port, function() {
  console.log(`http://localhost:${Port} 服务启动`)
})