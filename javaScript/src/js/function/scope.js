function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
console.log(counter())

//==========================
function sum(num_1) {
    return function (num_2) {
        return num_1 + num_2;
    }
}
console.log(sum(1)(2));

//--------------------------
let x = 1;

function func() {
    // 引擎从函数开始就知道局部变量 x，
    // 但是变量 x 一直处于“未初始化”（无法使用）的状态，直到结束 let（“死区”）
    // 因此答案是 error
    //console.log(x); // ?
    let x = 2;
}

func();

//----------------------------
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    }
}
function inArray(args) {
    return function (x) {
        return args.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//-------------------------

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let temp = i;
        let shooter = function () { // 创建一个 shooter 函数，
            console.log(temp); // 应该显示其编号
        };
        shooters.push(shooter); // 将此 shooter 函数添加到数组中
        i++;
    }

    // ……返回 shooters 数组
    return shooters;
}

let army = makeArmy();

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[2](); // 10，其他的也是这样。

//-------------------------------

