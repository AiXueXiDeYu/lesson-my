- 判断输入的字符串是否由 baidu 随机排列构成
    - 全排列    如何逐步确定某个位置放哪个字符的问题
    分成 n 个小问题 每一位放哪个字符
    k(1)k(2)k(len-2) ... k(1)
    abc 6种
    ''  abc 
    a 
    abc acb bca ...
    递归
    深度优先 dfs

- 字符串的全排列
    输入 是否在里面？ indexOf()