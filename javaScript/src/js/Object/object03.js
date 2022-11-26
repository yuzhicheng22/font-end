//对象中的方法
let temp = {
    name: 'defult',
    func_1: function () {
        console.log("I am function 1");
    },
    func_2() {
        console.log("I am function 2");
    },
}
// this 
temp.func_3 = function (str) {
    this.name = str;
    console.log("I am function 3");
}

let aclculator = {
    num_1: 0,
    num_2: 0,
    read() {
        this.num_1 = +prompt("Please input num_1", 0);
        this.num_2 = +prompt("Please input num_2", 0);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
}