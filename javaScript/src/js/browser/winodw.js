function sayHi() {
    console.log(`Hi`);
}
window.sayHi();

console.log(window.innerHeight);

// 文档对象模型（Document Object Model）

console.log(navigator.userAgent);   // 关于当前浏览器
console.log(navigator.platform);    // 关于平台

console.log(location.href);

// if (confirm("Go to Bilibili?")) {
//     location.href = "https://www.bilibili.com/"; // 将浏览器重定向到另一个 URL
// }

document.body.style.background = 'red'; // 将背景设置为红色

setTimeout(() => document.body.style.background = '', 3000); // 恢复回去