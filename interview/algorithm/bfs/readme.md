# DFS（Deep First Search）深度优先搜索。    BFS（Breath First Search）广度优先搜索。
   - 遍历   先中后 ，层序  遍历
     - 树状结构
        A
    B       C
    层序遍历
    - BFS DFS
    - 除了递归写法外， 能不能迭代写法
    preorder inorder postorder
    入栈的顺序 递归的本质  层级(递归式 当前的这棵树)
    1. js 表达树？
        面向对象
        数组
        对象字面量
        递归概念
    2. 树的递归概念
    3. 遍历  按照根节点出现的出现的顺序
    - 先序遍历
        1. 退出条件 当root 为空     叶子节点
        2. 递归的层级顺序 根  左  右

    - 递归算法很简单 迭代 
        不用递归， 此时我们本能的反应， 就应该是往栈上想
        迭代 -> 栈 类似
        遍历顺序 即出栈顺序和 入栈顺序 相反
        由于根节点要先入栈， 所以直接出栈， 然后右节点入栈， 左节点入栈，
        直到栈清空为止  完成遍历


