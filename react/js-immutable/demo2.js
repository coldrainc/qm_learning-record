var arr = ['old', 1, true, null, undefined]

var new_arr = arr.concat();
new_arr[0] = 'new';
console.log(new_arr, arr);

// slice 和concat 可以返回新数组， 浅拷贝
// 未来未可知， new_arr arr 一方修改
// js bad parts
// Immutable 让未来可知
// reducer 是一个纯函数