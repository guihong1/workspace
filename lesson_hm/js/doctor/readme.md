# 八股文
- 变量提升 
 - var 声明的变量会被提升到作用域顶部，赋值操作不会提升。所以未初始化的变量会被提升到作用域顶部，值为 undefined。
 - let 声明的变量不会被提升，所以会报错。
 - const 声明的变量也不会被提升，所以也会报错。
 - 函数声明会被提升到作用域顶部，函数表达式不会被提升。

 ex:
 
 ```js
 console.log(a); // undefined
 var a = 1;
 console.log(b); // ReferenceError: b is not defined
 let b = 2;
 console.log(c); // ReferenceError: c is not defined
 const c = 3;
 console.log(d()); // TypeError: d is not a function
 var d = function() { console.log('d'); };
 
console.log(foo) //function foo(){}
 function foo(){

 }

console.log(foo()) //undefined
function foo()
{

}
```