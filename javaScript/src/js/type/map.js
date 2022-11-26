//Map
let price = new Map([
    ['apple', 5],
    ['orange', 3],
    ['onion', 3.5],
])

price.set('pear', 6);
console.log(price.get('pear'));
console.log(price.has('str'));
price.delete('onion');
console.log(price.size);

console.log(price.keys());
console.log(price.values());
console.log(price.entries());

let obj = {
    name: `jack`,
    age: 12,
}
let objToMap = new Map(Object.entries(obj));
console.log(objToMap.get(`name`));

//let mapToMap = Object.fromEntries(objToMap);//X
let mapToMap = Object.fromEntries(objToMap.entries());
console.log(mapToMap.name);

//Set
let arry = [5, 6, 7, 8, 9];
let set_1 = new Set([1, 2, 3, 4, 5]);
let set_2 = new Set(arry);

set_1.add(100);
set_1.delete(1);