/*
实现使用 prompt 进行登录校验的代码。

如果访问者输入 "Admin"，那么使用 prompt 引导获取密码，如果输入的用户名为空或者按下了 Esc 键 —— 显示 “Canceled”，如果是其他字符串 —— 显示 “I don’t know you”。

密码的校验规则如下：

如果输入的是 “TheMaster”，显示 “Welcome!”，
其他字符串 —— 显示 “Wrong password”，
空字符串或取消了输入，显示 “Canceled.”。
*/

let username = prompt("Who is there?", '');
if (username == 'Admin') {
    let passWord = prompt("Please input password:", '');
    if (passWord == "TheMaster") {
        alert("Welcome!");
    } else if (passWord == '' || passWord == null) {
        alert("Canceled!");
    } else {
        alert("Wrong Password!");
    }
} else if (username == '' || username == null) {
    alert("Canceled!");
} else {
    alert("I don't know you.");
}
