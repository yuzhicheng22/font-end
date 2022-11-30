class Rabbit { }
let rabbit = new Rabbit();

// rabbit 是 Rabbit class 的对象吗？
alert(rabbit instanceof Rabbit); // true

// 多继承
class animal {
    constructor(name) {
        this.name = name;
    }
}
class dog extends animal {
    sayhi() {
        console.log(`wow`);
    }
}
class cat extends animal{
    sayhi() {
        console.log(`miao`);
    }
}
let dogs = new dog('wow');
let cats = new cat(`miao`);
dogs.sayhi();
cats.sayhi();