function Player(id) {
    //this = {}
    this.ID = id;
    this.isOP = false;
    this.sayHello = () => {
        console.log(`hello i am ` + this.ID)
    }
    //
    //return { ID: 'anne', isOP: true };
}
// 理论上任何函数都可以作为构造函数
let player01 = new Player('joey');
console.log(player01.ID);
console.log(player01.isOP);

player01.sayHello();

function Calculator() {
    this.read = () => {
        this.a = +prompt("please input number01", 0);
        this.b = +prompt('please input number02', 0);
    }
    this.sum = () => {
        return this.a + this.b;
    }
    this.mul = () => {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

//
function Accumulator(startValue) {
    this.value = startValue;
    this.read = () => {
        let temp = +prompt('Please input a number:', 0);
        this.value += temp;
    }
}
let accumulator = new Accumulator(1); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

console.log(accumulator.value); // 显示这些值的总和