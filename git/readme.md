# Git本地仓库 与GitHub 链接
- 新建文件夹
- git init  初始化仓库

- 看用户目录下是否有 .ssh
   没有： 输入 ssh-keygen -t rsa -C "邮箱"
      一直回车即可
   找到.ssh 里的id_rsa.pub 文件
- 在GitHub 用户设置里添加新的SSH KEY
- GitHub 新建仓库
   找到提升代码
      git remote add origin https://github.com/.../...
      运行即可
      可能出现的问题：error: src refspec main does not match any
      git branch -m master main
- git add readme.md  多次添加到暂存区
- git commit -m 'reason'  一次性提交
- git log --online 提交记录
- git reset --hard HEAD^ 返回上一部
- git status  当前仓库状态
- git pull origin master 拉下来
- git push origin master 提交到远程仓库
- git diff 有什么不一样的地方