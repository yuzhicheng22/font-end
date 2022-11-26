// function is a object

//===============================
// name:
function sayHi() {
    console.log(`hi`);
}

console.log(sayHi.name);

// 根据上下文推测 有时会失效
let array = [function () { }];
console.log(array[0].name);// <空字符串>

//====================================
// // length:
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum.length); // 2

//=====================================
// 自定义属性
function sayHello() {
    console.log(`Hello.`);
    sayHello.counter++;
}

//==========================
// NFE, Named Function Expression

let sayHey = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // 使用 func 再次调用函数自身
    }
};

sayHey(); // Hello, Guest

// 但这不工作：
//func(); // Error, func is not defined（在函数外不可见）

function mSum(a) {
    let currentSum = a;
    function inSum (b){
        currentSum += b;
        return inSum;
    }
    inSum.toString = function () {
        return currentSum;
    };
    return inSum;
}

console.log(mSum(1)(2)(3));

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(1)(2)(3));