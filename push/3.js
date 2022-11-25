// pop  
// 被弹出的元素值
const arr = [1,2,3]
// console.log(arr.pop());
// console.log(arr);
// 变量的类型由值决定
Array.prototype.pop = function () {
    // 拿到最后的元素
    // 删除
    // let temp = this[this.length- 1] = undefined
    this.length--;
    // delete this[this.length - 1]
    return temp
    // 返回
}
console.log(arr.pop())
console.log(arr);