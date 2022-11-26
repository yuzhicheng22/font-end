let animal = {
    eats: true,
    sayHi() {
        console.log(`I am a animal`);
    },
}
let rabbit = {
    jumps: true,
}

rabbit.__proto__ = animal;
console.log(rabbit.eats);
rabbit.sayHi();
// 只能有一个 [[Prototype]]。一个对象不能从其他两个对象获得继承。

let head = {
    glasses: 1
};

let table = {
    __proto__ : head,
    pen: 3
};

let bed = {
    __proto__ : table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__ : bed,
    money: 2000
};

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// 这只仓鼠找到了食物
speedy.eat("apple");
alert(speedy.stomach); // apple

// 这只仓鼠也找到了食物，为什么？请修复它。
alert(lazy.stomach); // apple