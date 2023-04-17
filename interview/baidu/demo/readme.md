# 百度的前端基础 一面是怎么样的
- 扎实的基础
- 场景题
- 灵活理解
- 底层思想 追根问题

- 面试是当面展示自己
- 表达逻辑 1， 2， 3， 4 首先，其次 ...
- 留坑 无形中 

- 扎实的前端基础
    1. 新手引导功能实现
        实战能力，面向对象 代码
        HTML + css + js 原生开发能力
    2. 添加遮罩层， 在图片上方添加一张只有人脸的照片
        css position 居中
    3. echarts 动画实现原理
        canvas / svg 
        requestAnimationFrame + canvas 的绘图api
        黑板擦 
        SVG DOM 编程
    4. 了解canvas吗？
        HTML5 绘图标签， 有丰富的绘图api 游戏/数据可视化/AR/VR/WebGL 方向的利器
        WebGL  ->  3D 方向
        - echarts 数据可视化 折线图那些
        vue 后台管理系统
        - canvas 的绘图api 结合requestAnimationFrame 手写 饼状图什么的， 但是由于时间原因 去搞vue 和 node 算法
        - HTML5 file 处理上传头像中  canvas 图片压缩和剪裁
    5. 如何实现组件滑动切换效果
        - vue 内置了 transition 组件
        - v-if v-show 组件的切换
        - 移动端的事件 pinch + tap  hammer.js 
        - name 给我们css的命名钩子和事件钩子  wave
        wave-enter-active  wave-enter-to
        wave-leave-active  wave-leave-to
    6. 语义化的理解
        - HTML5 有一些语义化标签
            header footer main aside nav section
            article
        - SEO 友好 百度的排名
            #root MVC template + data SSR
            SPA 前端render
        - 代码可读性
    7. less stylus(css 预编译器) 多处用到px 转换为 vw 如何实现 
        - 兼容性的复用
            1. 公司的设计稿件 iPhone 375pt 750px  
                蓝湖 前端设计稿
                120px 设计稿 750px 100vw
            2. mixin
                pxToVW($px, $attr=width)
                    $vw = ($px / 750) * 100 
                    $attr {$vw}vw
                .box {
                    pxToVW(150, height)
                }
    8. vue-router 中的router 和 route 的区别
        如何让面试官高兴？埋坑 面试是当面展示自己
        激情 谦虚 好学 心理素质好

        router 是 前端路由管理对象
        route 是当前路由对象

        router push 等跳转操作
            路由守卫 meta isLogin
        route 取 params qs 等参数

    9. vue 单页应用无刷新更新组件怎么实现?
        - vue-router 配置 routes数组 配置 单页应用
        - app.use(router) 启用路由
        - vue router-view 组件
            path -> 页面级别组件 显示到 router-view 中
        - 当点击a标签等切换路由时， 原组件卸载， 匹配新路径的页面级别组件显示在 router-view
            <Component is={component}/>
            <router-view v-slot="{component}">
                <Component :is={component}/>
            </router-view>
        - hashChange # 兼容 和 history 两种方案 都不需要刷新 后端路由一样好理解 
        IE 时代已经结束 PC 兼容

    10. vue 在页面中如何监听回到上一页操作
        mounted() {
            // DOM ready  事件监听
            // 浏览器嗅探 history api
            if (window.history && window.history.pushState) {
                // 当前路由入栈
                history.pushState(null, null, document.URL)
                window。addEventListener('popstate', this.goBack, false)
            }
        }
        hashChange
