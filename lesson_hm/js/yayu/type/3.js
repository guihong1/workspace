console.log(Number()) //0
console.log(Number(undefined)) //NaN  undefined 数值上下文中没有转成一个特定数字的含义
console.log(Number(null)) //0
console.log(Number(false))
console.log(Number(true)) //1
console.log(Number("123"))//123

console.log(Number("0x11")) //17
console.log(Number(""),Number(" "))//0 1
console.log(Number("100a"))//NaN
