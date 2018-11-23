# babel

1. babel class 编译
  .babelrc 文件不可少，babel配置文件， presets数组， env
- js 面向对象是原型式的 es5
  function Person() {} 构造函数
  Person.prototype = {}
  es6 class constructor 只不过是语法糖而已
- es5的构造函数可以作为普通的函数来执行，
  class的es6的代码在babel编译的时候 杜绝编译过后不new直接执行
- es6的prototype属性不可枚举enumrable
  Object.keys(Person.prototype)
  Object.getOwnPropertyNames(Person.prototype)