// 作用域
var a = 1;
function foo() {
  // scopeFoo.a
  var a = 2
  console.log(a);
}
foo();