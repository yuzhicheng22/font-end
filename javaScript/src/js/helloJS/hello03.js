console.log(Number(false));

console.log(false == ""); // true --> false 被转换成 0 , ""被转换成 0
//严格相等运算符 === 在进行比较时不会做任何的类型转换
console.log(false === ""); // false

let answer = prompt("What's the “official” name of JavaScript?", "");
if (answer == "ECMAScript") {
    alert("Right!");
} else {
    alert(`You don't know?"ECMAScript!"`)
}

let number = prompt("Please input a number", "");
if (number > 0) {
    alert(1);
} else if (number == 0) {
    alert(0);
} else {
    alert(-1);
}

// let message;
// login == "Employee" ? message = "hello" :
//     login == "Director" ? message = "Greetings" :
//         login == '' ? message = "No login" : message = '';
//better

let login = prompt("please", '');
let message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Greetings" :
        (login == '') ? "No login" :
            '';
alert(message);