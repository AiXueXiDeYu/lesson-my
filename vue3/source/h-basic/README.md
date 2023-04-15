# snabbdom + vue 需求
编译原理
- component -> template -> complier -> h(三个参数， babel 抽象语法构建) -> VNode -> Renderer -> DOM

let a = 1
let b = 2
let c = a + b
词法分析 token 以树状结构 组织 AST抽象语法树

- h() 函数  模式
    - 返回的VNode 设计
    - 参数
        tag data children

- vue 源码学到了什么
    - 处处性能优化
        - VNodeFlags ChildrenFlags
            位运算 &
            render 到底是走dom api 还是 Component
            render 位 & VNode flags & VNodeFLags
            ELEMENT
        - element VNode 真实DOM 
    - 代码的模块化
        - flags 单独放
        - reactive 
        - compiler
        - renderer
    - 测试驱动开发 TDD
        实现一个小目标慢慢推进大目标
    - 面向对象的设计
        - Component 组件设计
            - 继承
                render 必须有  vue 2.0
                基类 throw super 