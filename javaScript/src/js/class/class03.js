class CoffeeMachine {
    // Public
    //waterAmount = 0;

    // 受保护的属性通常以下划线 _ 作为前缀。
    // 受保护的字段是可以被继承的
    _waterAmount = 0;

    #waterLimit = 200;

    constructor(power) {
        this._power = power;
        console.log(`Created a coffee machine, power: ${this._power}`);
    }

    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    get power() {
        return this._power;
    }

}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmout = 10;
console.log(`Coffee Machine WaterAmount: ${coffeeMachine.waterAmount}`);

console.log(coffeeMachine._waterAmount);

coffeeMachine.power = 50; // error
console.log(coffeeMachine.power);

coffeeMachine.waterAmout = -10; // value = -10 => value = 0
console.log(`Coffee Machine WaterAmount: ${coffeeMachine.waterAmount}`);

// 不能从类的外部访问类的私有属性和方法
//coffeeMachine.#fixWaterAmount(123); // Error
//coffeeMachine.#waterLimit = 1000; // Error