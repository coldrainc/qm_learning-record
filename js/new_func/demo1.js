// new ? 实例化过程是怎么地层的？

// Otaku类

function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}

Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function() {
  console.log('I am' + this.name);
}

function objectFactor() {
  // console.log(arguments);
  var obj = {};
  Constructor = [].shift.call(arguments);
  Constructor.apply(obj, arguments);
  obj.__proto__ = Constructor.prototype
  // console.log(arguments);
  // 1 返回新的空的对象
  // 2 this 要指向新的对象
  // 3 让Constructor执行
  // obj 上拥有constructor 上所有属性？
  return obj;
}
// 1. 构造函数 2 其余是构造函数需要的参数
const didi = objectFactor(Otaku, 'Kevin', 18);
console.log(didi.name);