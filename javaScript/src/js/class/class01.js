class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal('jin');

class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // 调用父类的 stop
        this.hide(); // 然后 hide
    }
}
let rabbit = new Rabbit("White Rabbit", 10);

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
console.log(rabbit.earLength);

// =====================================
// Task-1:
// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);