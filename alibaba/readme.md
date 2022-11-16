# 阿里巴巴双十一界面开发

- 设计稿件
    750px 像素  一种尺寸 移动页面
    iPhone 的小尺寸375pt retina 屏幕 设计的标准
- 前端使命
    html+css+js 一像素不差的还原设计稿 
    - 交互
    - css 实现视觉效果 css动画
    - 设计稿是静态的，我们要做动态的
    - 兼容性 阿里巴巴 兼容性到达了恐怖的99.99%

- css reset
    1. 抹平不同浏览器的预设样式， 从0出发， 在所以浏览器上表现一致
    2. 利用css inherit 继承 font-size font-family body...
        默认16px 

- rem 单位
    1. 在移动端， 为了兼容 少用甚至不用px
    2. 先给HTML便签设置一个font-size
        37.5px 固定？
        等比例 1/10 方便去做栅格系统 布局
        如何在不同的设备上， 让1rem = 设备宽度/10
    3. html 的font-size 要动态设置
        window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = w + 'px';