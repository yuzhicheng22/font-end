// Rest

function sum(a, b, ...args) {
    for (let arg of args) {
        console.log(arg);
    }
    return a + b;
}
sum(1, 2, 3, 4, 5);

// Arguments

function showMe() {
    console.log(arguments);
}

showMe(1, 2, 3, 4, 5);

// Spread语法

let args = [1, 2, 3, 4, 5];
sum(...args);

sum(1, 2, 3, 4, 5, ...args);

