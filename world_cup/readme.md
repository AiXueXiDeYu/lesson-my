# 营销h5页面特效开发
- 招商银行

1. !DOCTYPE html
    html5 版本的声明

2. rotateX(90deg) 推倒 顺时针
    rotateY 龙哥钢管舞
    rotateZ 轮胎
    perspective ：800px 视点 眼睛里屏幕的距离 远近 大小 
    transform-style：perseve-3d

3. HTML 怎么看到静态页面(用户体验 越快越好)
    HTML（结构）+ css (样式)  js晚一点（交互，DOM .style）
    - 下载HTML文档
    - link script image ...
        启动下载 css href  不会阻塞HTML的下载 放到头部 尽早开始下载，显示静态页面
        script src  放在最后  阻塞
        image src

4. chrome 浏览器的内核 webkit
    ie 浏览器 edge
    mozilla
    360 如果本地装了Chrome webkit
    否则 ms(edge)
    实验中的属性 可能需要 添加 支持
    -webkit-backface-visibility:hidden

- 如何隐藏一个元素，区别？
    display：none;隐藏  让元素离开文档流
    visibility:hidden;
    opactiy:0;
    文档流  一个HTML文件就叫一个文档
    盒子， HTML元素 像水流一样 从上到下（块级block），从左到右（inline liline-block）
    html元素就在占有位置 = 盒子模型决定的 = 内容+padding+border+margin
    文档流 + 盒子模型 决定看到的页面
    脱离正常文档流,定位了

- 3D 世界杯反转特效
    1. 正面 立方体的最里面 translateZ（330px）
    2.  下面 本来 也是layer1 在一起的，
        tranform-style: preserve-3d;
        rotate(-90deg)
    3. screen screen_x90 类 顺时针旋转90
        正面就看不到了
        底面变成了新的正面

- 添加了触屏事件系统
    PC click    dbclick    submit keydown   keyup...
    Mobile 手势 tap pinch(down|up)
    hammer.js 手势库