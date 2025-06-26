// js 造人  class es6 2015年后才有
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        console.log("吃饭")
    }
    sleep(){
        console.log("睡觉")
    }
}

let w=new Person("啊w",18)
let m=new Person("mao",18)