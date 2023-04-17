const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};


// preorder 先序
function preorder(root) {
    // 递归边界，root 为空
    if (!root) {
        return // 回溯
    }

    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
    // 递归遍历左子树 
    preorder(root.left)
    // 递归遍历右子树  
    preorder(root.right)
}

// inorder 中序
function inorder(root) {
    // 递归边界，root 为空
    if (!root) {
        return // 回溯
    }

    // 递归遍历左子树 
    inorder(root.left)
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
    // 递归遍历右子树  
    inorder(root.right)
}


function postorder(root) {
    // 递归边界，root 为空
    if (!root) {
        return // 回溯
    }

    // 递归遍历左子树 
    postorder(root.left)
    // 递归遍历右子树  
    postorder(root.right)
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
}
