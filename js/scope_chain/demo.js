// 1. 全局执行上下文， 全局执行上下文压入 执行上下文 栈
// 先放入全局上下文环境，然后放入栈内。
// 2 全局执行上下文初始化， 
// 全局作用域就是栈最下面的
// 3. 创建函数执行上下文， checkscope入栈
// 4. 函数被运行后, this, 创建变量， 作用域链
// 5. checkScope 函数执行完毕， checkscope执行上下文从执行上下文栈中弹出
// 6. 执行f函数， 创建了f函数执行上下文， f函数执行上下文被压入执行上下文栈
// 7. f 执行上下文变量, 作用域链this
// f 创建作用域链时， scope保持了对checkscope函数的作用域的引用
var scope = 'global scope';
function checkScope() {
  var scope = 'local scope';
  // 上下文环境 context
  // 创建时 形成了上下文环境， 在环境中的自由变量， 可以在调用时找到
  function f() { // 函数在独立调用的时候就是指向 window
    return scope;
  }
  return f;
}

var foo = checkScope();// 生成了函数
console.log(foo());// 调用了函数

// AO Active Object
// VO Variable Object
fContext = {// AO 作用域第一个表示的是f函数的作用域
  Scope: [AO, checkscope.AO, globalContext.VO]
}
checkScope = {
  Scope: [AO, globalContext.VO]
}