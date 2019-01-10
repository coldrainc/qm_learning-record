const Koa = require('koa')
const app = new Koa();
const fs = require('fs-promise');

const main = async function(ctx) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.writeFile('./template.html', 'utf8');
}

app.use(main);
app.listen(3000, function(){
  console.log('服务启动');
});