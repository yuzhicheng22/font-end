// 函数表达式
let sayHello = function () {
    console.log('hello World');
}

console.log(sayHello); // 在 JavaScript 中，函数是一个值，所以我们可以把它当成值对待。

// 回调函数
function showAgree(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}
function agree() {
    console.log('Welcome to my web');
}
function disagree() {
    console.log('I am sorry to hear that');
}
//showAgree('Are you want to my home?', agree, disagree);
showAgree(
    'Are u ok?',
    function () { console.log('ok') }, // 匿名函数
    function () { console.log('oh no') }
)