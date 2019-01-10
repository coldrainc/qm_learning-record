const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const router = require('koa-router')();

// const main = ctx => {
//   // ctx.reponse.body = 'Hello World'
//   // ctx.response.type = 'html';
//   // ctx.response.body = fs.createReadStream('./template.html')
//   if(ctx.request.path !== '/'){
//     ctx.response.type = 'html'
//     ctx.response.body = '<a href="/">Index Page</a>'
//   } else {
//     ctx.response.body = 'Hello World'
//   }
// }
router.get('/', function(ctx) {
  ctx.response.body = '<a href="/test">to test</a>';
})
router.get('/about', function(ctx){
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
}).get('/test', function(ctx){
  ctx.response.body = '<a href="/about">to About</a>';
})

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, function(){
  console.log('hello koa')
})