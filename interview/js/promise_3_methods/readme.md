- 任务流 Promise序列
   [upload(), upload(), upload(), upload(),]
   - 随机定时器值 任务完成时间和序号 (索引) 没有关系
   - 一半成功， 一半失败
   - setTimeout 第三个参数会在定时器到达时触发
   - promise then 最后 catch rejected 时候 触发
   - async await
      出错后 -> 
      rejected
      try {

      } catch(err) {

      }
   - console.log(`run ${time}ms`);
      是否运行了
   
   - Promise.all
      中的Promise序列会全部执行通过才认为是成功，否则认为是失败
      有失败的并不会停下来
      结果 返回
   - 并发

   - Promise.race
      - 第一个完成的 result
      - 所有的都会运行
      - 并行

   - Promise.any
      - 只要有一个成功 就成功
      - 并返回
