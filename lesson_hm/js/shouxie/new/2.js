function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

function objectFactory(){
    const obj = new Object();//创建空对象
    //手动的__proto__指向Person.prototype
    obj.__proto__ = Constructor.prototype;
    const Constructor = [].shift.call(arguments);//取出第一个参数
    Constructor.apply(obj,arguments)
    return obj;

}
let awei = objectFactory(Person,'awei',18);