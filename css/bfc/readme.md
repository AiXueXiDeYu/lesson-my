# css 必考题 BFC
    Block Formating Context
        Block 占据一行
    Block Formating Context
        row 不会换行  
    我们看到的页面 是由那些规则决定的呢？
   - 文档流
    正常文档流
    脱离文档流
        none  
        position 不为static
        float 离开文档流
        父元素那不到子元素的高度
        <!-- 父元素 定死高度 -->
        弹性布局 子元素在一行上显示， float 在一行

- 在正常文档流中
    浮动会让元素离开文档流
    父元素 不能知道子元素大小
    更严重的问题是？ 文档流出问题， 下面的盒子会盖到float元素
    一定要让父元素拿到 高度，
    在正常文档流可以开启新的BFC css魔法就上演了
    html 是最大的BFC 由浏览器自动创建给予
   - 在BFC 里，父元素会将浮动元素参与计算 得到高度
   - 创建BFC 的方法
        - overflow: hidden
        - display : inline-block
        - position: absolute fixed
        - 浮动
        - flex
        - display:table

    - 在同一个BFC里， 垂直方向的距离， 由margin决定
        相邻margin 会重叠