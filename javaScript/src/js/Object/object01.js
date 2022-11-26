//Creat a Object
let temp_1 = new Object();
let temp_2 = {};

let student = {
    name: 'Mike',
    age: 18,
    sex: 'Boy',
    "likes birds": true,  // 多词属性名必须加引号
}
//console.log(student.name);
//delete (student.sex);

function search() {
    let key = prompt("Please input key", 'name');
    console.log(student[key]);
}

//search();

//work
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete (user.name);

function isEmpty(object) {
    for (let key in object) return false;
    return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);