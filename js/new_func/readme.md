# new

new 到底做了什么？
let p = new Person();
p 是 Object类型

1. parent 被执行， 加了new后， parent 函数会在p的作用域下执行 ， this 指向p 构造函数里的属性被当作p的属性被创建
2. p.__proto__指向person.prototype Person.prototype p 继承了 Parent.prototype中的属性和方法

在js中 var a = new A() 后

1.创建一个空对象obj{}

2.将a的this指向obj{}

3.将a的_proto_指向A的prototype

4.执行A的构造函数

5.返回obj