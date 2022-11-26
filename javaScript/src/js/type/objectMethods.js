let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let sum = 0;

    for (let money of Object.values(salaries)) {
        sum += money;
    }
    return sum;
}

console.log(sumSalaries(salaries)); // 650

//------------------------------------------>

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    // return Object.entries(obj).length;
    return Object.keys(obj).length;

}

console.log(count(user)); // 2