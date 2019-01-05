

var new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr)
// JSON连个方法发， 对非函数子元素， 可进行深拷贝， 性能开销比浅拷贝开销大