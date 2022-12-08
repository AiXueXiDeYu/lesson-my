// 本分
function add(a, b) {
    return a + b;
}
// fn 等待着被优化的函数
// 闭包 函数内部还有函数(可以调用生成环境上下文的变量)
function memorize(f) {
    // 缓存结果 {} key

    // console.log(fn,args);
    var cache = {
        // key 要是字符串
        // "lu": "抖音"
    };
    // 作用域
    return function() {
        // console.log('我是inner function',cache.lu);
        // console.log(Array.prototype.join.call(arguments, ","),'//////');
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // console.log(key,'////');
        if (key in cache) {// in json 运算符
            console.log('缓存了');
            return cache[key]// 没有运行f  []
        } else {
            console.log('add...');
            // cache[key] = f(arguments)
            // apply call 都可以运行函数， 手动指定内部的this,
            // apply 数组集合 [] ,作为f 的参数
            cache[key] = f.apply(this, arguments)
            // return cache[key]
             // cache[key] = f.call(this,... arguments)
        }
        // else return cache[key] = f.apply(this, arguments)
    }
}
// 函数运行完后就销毁
// 函数将会进入执行栈 创建函数作用域，
var memoizedAdd =  memorize(add) //运行了才会生成闭包函数
// 出栈 ？ 内存的回收 cache 没有了 被回收 但却没有， cache 被接下来的函数引用着
memoizedAdd(1,2); // 运行时可以找到生成时的上下文环境中的变量
memoizedAdd(1,2);