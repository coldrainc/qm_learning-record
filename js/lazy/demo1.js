var t;
// 写一个函数， 不管函数多少次， 只返回最早的一次计算
function foo() {
  if(t) return t;
  t = new Date();
  let time = t;
  return t;
}
console.log(foo());
setTimeout(() => {
  console.log(foo());
}, 2000)


