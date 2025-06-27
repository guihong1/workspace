# 显示类型转换和隐式转换
- Primitive 怎么转对象
- 对象转Primitive
  JS 一切面向对象 自动帮我们包装

- 对象转Primitive

 - String
   toString()
     - Object.prototype.toString.call({a:1})  "[Object Object]"
     确切类型
     - 数字，调用原型上的toString方法
     - 函数  返回源代码
     - 日期  
    - Number


基本类型转对象
对象转基本类型
Object转Primitive  valueOf  toString

- Number
  valueOf()
    - Object.prototype.valueOf.call({a:1})  "[Object Object]"
    - 数字，调用原型上的valueOf方法
    - 函数  返回源代码
    - 日期  返回时间戳
- String
  valueOf()
    - Object.prototype.valueOf.call({a:1})  "[Object Object]"
    - 数字，调用原型上的valueOf方法
    - 函数  返回源代码
    - 日期  返回时间戳

  toString()
    - Object.prototype.toString.call({a:1})  "[Object Object]"
    - 数字，调用原型上的toString方法
    - 函数  返回源代码
    - 日期  返回时间戳
- Boolean
  valueOf()
    - Object.prototype.valueOf.call({a:1})  "[Object Object]"
    - 数字，调用原型上的valueOf方法
    - 函数  返回源代码
    - 日期  返回时间戳
  toString()
    - Object.prototype.toString.call({a:1})  "[Object Object]"
    - 数字，调用原型上的toString方法
    - 函数  返回源代码
    - 日期  返回时间戳


- Object => Primitive

  - 分为String和Number。不同的转不一样

- Object => String || Number
  - toPrimitive 是使命 
  - toString
  - valueOf
  - Number 先valueOf 再toString
  - String 先toString 再valueOf
  - 还不行就报错 cannot convert object to primitive value TypeError;
- Object => Boolean

 

