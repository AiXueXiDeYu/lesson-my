// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
    // sayHello () {

    // }
// }
//  构造函数 对象添加属性
// 共享 类的方法
// 构造函数
//js 独特的面向对象方式
var name = '世龙';
var age = 17;

function Person (name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    //this
    console.log(`hi,我是 ${this.name},今年${this.age}`);
    // console.log('hi,我是' + this.name + ',今年' + this.age);
}
//  
const yu  = new Person('宇',18);//构造函数
yu.sayHello();//对象的方法被运行
console.log(jay.name);

const jay  = new Person('杰',18);
jay.sayHello();

// const fn = jay.sayHello;
// fn();