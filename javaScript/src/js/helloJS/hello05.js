let temp = 0;
function test(temp) {
    temp = 1; // just a copy
    console.log(temp);
}
//test();
//console.log(temp);


function test02(name, lastName) {
    console.log(name + '.' + lastName);
}
//test02("jack");
function test03(name, lastName = "Defult") {
    console.log(name + '.' + lastName);
}
//test03();

//空值的 return 或没有 return 的函数返回值为 undefined

function checkAge(age) {
    return age > 18 ? true : prompt("Did parents allow you?");
}
//checkAge();

function min(a, b) {
    return a < b ? a : b;
}
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

function pow(x, n) {
    if (n < 1) {
        alert(`Power ${n} is not supported, use a positive integer`);
        return;
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(3, -1));