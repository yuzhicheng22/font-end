// 拓展内建类
// 给 PowerArray 新增了一个方法（可以增加更多）
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // 内建方法将使用这个作为 constructor
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50

// filteredArr 不是 PowerArray，而是 Array
alert(filteredArr.isEmpty()); // false

// 内建类没有静态方法继承
