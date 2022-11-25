// 封装 普通的相加函数
// add 函数声明在window
'use strict';
function Test () {
    // this 由函数的运行方式决定
    console.log(this);
    this.x = 1;
}
// 函数可以被new， 被new的函数叫 构造函数
const o = new Text ();
console.log(o.x);

function add (x,y) {
    //检验参数 this, arguments
    // 两个关键字
    console.log(this,arguments);
    return x + y
}
let obj = {
    add:add
}

console.log(add(1,2)); // 所以语言
obj.add(); //作为对象的方法调用的时候