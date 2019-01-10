const app = new Koa();
const one = (ctx, next) => {
  console.log('>> one');
  next(); // 使用next 将会到下一个中间件，而next后的代码将不会执行
  console.log('<< one');
}
const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}
const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two)
app.use(three)
app.listen(3000)