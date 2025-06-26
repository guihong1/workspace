- 认识几个url
  url的设计模式 restful api
  网站是用来暴露资源的  如何将资源暴露出去

  - http://localhost:3000/posts/2 详情页的链接
  - http://localhost:3000/posts   列表页的链接
  - http://localhost:3000/users/1 用户主页链接

- 数据的查询 Read

- 全栈防抖
  - 前后端分离 解耦
  - 前端 live-server 5500
    fetch url
  - 后端 json-server 3000
    url 接口服务 restful 
  - api 接口

- filter 、map
  - 都是Array.prototypr 上的方法，所有的数组都有
  - filter 数组过滤，回调函数返回值是否为true，为true则保留，为false 则过滤掉
  - map 数组映射，回调函数返回值为新的数组 原有数组不能满足需求
  - forEach 迭代每一项 不需要返回值

  - 防抖
   - 将要执行的函数交给一个debounce()高阶函数去优化
   - 减少执行次数，只执行连续输入最后一次
   - 定时器 本次关掉上一次的定时器
