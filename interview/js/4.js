// 手写map 
// thisArg 指定 callbackFn 内部的this 指向
Array.prototype.map = function(callbackFn, thisArg) {
   // this -> [1,2,3]
   // obj?
   if (this === null || this === undefined) {
      throw new TypeError('cannot read proerty map of null or undefined')
   }
   // if (object.prototype.toString.call(callbackFn) != '[object Function]') 
   if (typeof callbackFn != 'function')
   {
      throw new TypeError(callbackFn + 'is not a function')
   }
   // 显式类型转换 this 对象
   let O = Object(this);
   let T = thisArg;

   let len = O.length;
   let A = new Array(len); // 跟以前的数组没有影响， 全新的内存分配
   for (let K = 0; K < len; K++) {
      // this[K] 遍历的每一项
      // 下标
      // this 第三个参数
      if (K in O) {
         let KValue = O[K] // 每一项
         let mappedValue = callbackFn.call(T, KValue, K, O)
         A[K] = mappedValue
      }
   }
   return A;
}
let nums = [1, 2, 3];
let obj = {val: 5}; // map 回调 绑定它的this
let newNums = nums.map(function(item, index, array){
   return item + index + array[index] + this.val;
}, obj)
console.log(newNums);

// Array.protype.map.call(null);
