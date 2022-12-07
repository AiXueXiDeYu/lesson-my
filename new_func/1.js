var stuA = {
    name:'cai'
};
var stuB = {
    name:'liu'
};

function sayHi (...args) {
    // es6 语法
    console.log(arguments, ...args);
    console.log(`你好，我是${this.name}`);
}
Object.prototype.sayHi = sayHi;
// stuA, stuB 都能 sayHi
// call 改天换命， 手动指定this的指向
// this => 调用对象stuA stuB
// sayHi.call(stuB);
// sayHi.call(stuA)

stuA.sayHi();

sayHi.apply(stuB);

var func = sayHi.bind(stuB);
func();

//call 与apply 的区别，参数的传递
sayHi.apply(stuB,[1,2]);
sayHi.call(stuB,1,2)