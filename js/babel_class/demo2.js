"use strict";

// class Person {
//   // es6 constructor
//   constructor() {
//     this.name = name;
//   }
//   sayHello() {
//     console.log(`hello ${this.name}`)
//   }
// }

// console.log(Object.keys(Person.prototype));// Person上的属性就是prototype
// // []
// console.log(Object.getOwnPropertyNames(Person.prototype))
// [constructor, sayHello]

// 让我们的构造函数不可以当做一般的函数来运行
// function _classCallCheck(instance, Constructor){
//   if (!(instance instanceof Constructor)){ // instanceof 是用来判断对象的类型
//     throw new TypeError("Cannot call a class as a function");
//   }
// }
// function Person(name) {
//   // 将我们的Person函数作为普通函数来调用，
//   _classCallCheck(this, Person);

//   this.name = name
// }
// console.log(Object.keys(Person.prototype));
// console.log(Object.getOwnPropertyNames(Person.prototype))


// es5 构造函数就是一个普通函数
function Person(name) {
  this.name = name;
  console.log(this);
}

Person.prototype = { // 必须new作为一个对象才能使用 
  sayHello: function sayHello() {
    return this.name;
  }
};
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));

// var lilei = new Person('lilei');
// // var test = Person('test'); 直接使用函数this指向全局

// var person = lilei.sayHello();
// console.log(person)
