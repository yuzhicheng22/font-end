function slow(x) {
    console.log(`Called with${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin


function work(a, b) {
    console.log(a * b);
}

function cahingDecorator_Work(func) {
    calls: [];
    
}