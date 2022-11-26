// 三种交互
alert("我是一个弹窗");

let wechat = prompt("Please input your name", 'null');
console.log(wechat);

let boolHello = confirm("hello");
console.log(boolHello);

// 类型转换
let value = true;
//alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
//alert(typeof value); // string

// 运算符
let string = "hello" + "world";
console.log(string);

console.log(2 + 2 + '1'); // "41" not "221"
console.log('1' + 2 + 2); // "122" not "14"

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(`a = ${a}, c = ${c}`);

console.log(NaN - 1);

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // false --> 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5// "-14"
null + 1 // 1 
undefined + 1 // NaN
" \t \n" - 2 // Nah --> -2 两端的空白字符（空格、换行符 \n、制表符 \t 等）会被忽略。空字符串变成 0


