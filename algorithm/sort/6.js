const bubbleSort = arr => {
    console.time('优化了排序区域和提前退出')
// 多什么一下变量， 可以让我们放下一些思想
    let temp = 0; // 交换的中间变量
    let lastExchangeIndex = 0; // 无序数列的边界
    let len = arr.length;
    let sortBorder = arr.length - 1; // 已经排好序的边界
    for (let i = 0; i < len; i++) { // j 0 -> sortBorder swap
        let isSorted = true;// 是否可以直接退出
        for (let j = 0; j < sortBorder; j++) {
            if(arr[j] > arr[j + 1]) {
                temp =arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSorted = false
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex
        if (isSorted) {
            break
        }
    }   
    console.timeEnd('优化了排序区域和提前退出')
    return arr
}
console.log(bubbleSort([3,4,2,1,5,6,7,8]));
