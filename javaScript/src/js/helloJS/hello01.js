"use strict";
// 代码以现代模式工作

alert("hello JavaScript again");

let message = 'I am a messgae';
console.log(message);

let hello = 'Hello world!';

// 将字符串 'Hello world' 从变量 hello 拷贝到 message
message = hello;

// 现在两个变量保存着相同的数据
console.log(hello);
console.log(message);

// "" '' `` 的区别
console.log(`hello ${message}`);

// 以字符串的形式返回类型名称，例如 "string"。
typeof (message);
