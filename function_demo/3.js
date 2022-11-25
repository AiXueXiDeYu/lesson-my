'use strict'
// 变量作用域
var name = '龙' //全局  window
//this 指向 调用方法
// js 变量属于 作用域
function func() {
     y = 2;//不加var 就是全局， 不好
    var name = 'jay'// func 内部 局部变量
    {
        //块级作用域
        let x = 1;
        var z = 3;//es5不支持块级作用域
        let name = '涛' 
    }
    console.log(y,x);//无法找到x
    console.log(y,z);//可以打印y,z
}
func();
console.log(y);
