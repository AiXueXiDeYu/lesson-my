/**
 * @func 判断left是否是right的实例
 * @param {*} left 对象；
 * @param {*} right  对象
 * @return boolean
 */
function myInstanceof(left,right) {
    // right只要出现在left的 原型链的如何一站都可以     
    // return left instanceof right
    while(true) {
        // 可以不用往下走？
        if(left === null) {
            return false;
        }
        if (left.__proto__ === right.prototype){
            return true;
        }
      left =   left.__proto__
        // left __proto__ 原型链查找一直下去
    }
}

myInstanceof (aTao, Person);