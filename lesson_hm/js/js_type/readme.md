# js 数据类型

- js有多少种数据类型
  **内存机制**
  **拷贝，引用式**




  - 简单数据类型
    numeric(number + bigint)，string, boolean,null,undefined,symbol
    依据变量内存的分配机制 栈内存  复杂数据类型的栈里存的是指向堆内存的地址

  - 复杂数据类型
     object 

   - null?
      null 表示一个空值或不存在的对象，是一个可以赋给变量的特殊值
      显示回收内存

   - undefined 未定义（类型）

    - Symbol es6 的新数据类型 独一无二
     - 以函数的形式创建，简单值
     - 打个标签
     - 哪怕标签一样，值绝对不一样
    - bigint 大整数
      

- 简单数据类型  Primitive（原始）
    一眼就能看出其值

    函数、数组等有很多特性无法表达

## 对象
  - 丰富、复杂、笼统
  - 函数 ？ 函数对象，一等对象 ？ 可执行对象
    - 函数有属性、方法
    - 函数可以作为形参传递
  - 数组 可迭代的对象

- ECMAScript 是js的标准
- 区分这么多种的对象？
- 得到变量的确切类型
  typeof 除了null之外的primitive类型 都可以得到正确的结果
  null 是object 当初设计的bug
  前三位 表示类型的值  null和object 前3位都为000

  




    
  