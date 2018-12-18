@testable
class MyTestableClass {
  constructor() {
    this.a = 0;
  }
}

function testable(target) {
  target.isTestable = true;
}

console.log(MyTestableClass.isTestable);