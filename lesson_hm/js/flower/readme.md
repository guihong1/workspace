# 面向对象设计模式之代理模式
  

## 面向对象 OOP 
- 现代软件开始思想就是面向对象思想
  dai、xm、xh(代理对象)
- 对象字面量
  {}, 不用new 不用class
  表现力强 key:val,
- 属性和方法
  const xm={
    name:" ",
    age:,
    hobblies:["吃饭","睡觉","打豆豆"]
  }

## 代理模式
- 设计模式是1-2年程序员擅长的，大厂实现面试就要考。
  未来可以成为架构师的
- 问题：戴xx直接送花，可能会失败，所以我通过找一个中介人（小红）来送花

- 小红是代理对象
  - 老乡 hometown 属性表达
  - 和小美有一样的方法 receiveFlower
    戴可以送给小红， 去转送
  - 接口 interface
    面向对象编程成长为面向接口编程，设计我们的面向对象的软件世界
  - 代理模式通过实现相同的接口，对象互换，确实更好的
    等小美心情好的时候再送。

## js 语法

- const 常量
- === 恒等
- js 数据类型
  string number(不分integer,float) boolean object(array,function,{}) 

- 定时器 setTimeout(function(){},2000)

