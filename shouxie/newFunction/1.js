function Person(name, age) {
    // 构造
    //基于原型的封装  {}
    this.name = name
    this.age = age
}
Person.prototype.sayHi = function () {
    console.log(`你好，${this.name}`);
}
const aTao = new Person('ATao',18);
/**
 * @func new的过程
 * @params constructor ...
 * 1. js 基于对象 {} 
 * 2. Person this 构造的过程
 * 3. 手动返回 实例对象
 */
// ...args  reset 运算符
function myNew (constructor, ...args) {
    // console.log(aegs,'??');
    const obj = {} //基于对象原则
    // 借
    // arguments[]
    // const constructor = Array.prototype.shift.call(arguments)
    // arguments 能用下标访问但没有数组方法
    // 伪数组
    // console.log(typeof arguments,Object.prototype.toString.call(arguments));
    // console.log(arguments[arguments instanceof Array]); 
    // {}
    //Person 属性？
    // return
    // es6 展开数组
    // constructor.call(obj,...arguments)
    constructor.apply(obj,args)
    // call apply 手动指定 函数内部的this
    obj.__proto__ = constructor.prototype;
    return obj
}
let wu =  myNew(Person,'吴总',18)