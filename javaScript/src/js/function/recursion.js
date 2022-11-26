let company = { // 是同一个对象，简洁起见被压缩了
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

console.log(sumSalaries(company));

//=====================================

function sumTo(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}
console.log(sumTo(10));

//----------------------

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

//-----------------------

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    console.log(list.value);
    if (list.next != null) printList(list.next);
}

printList(list);

//--------------------------

function printListR(list) {
    if (list.next != null) {
        printListR(list.next);
    }
    console.log(list.value);
}

printListR(list);