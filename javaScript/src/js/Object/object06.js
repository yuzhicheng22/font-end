let id = Symbol("id");
let id_2 = Symbol("id");
console.log(id === id_2);//false


//alert(id); // 类型错误：无法将 symbol 值转换为字符串。
console.log(id.toString()); // Symbol(id)，现在它有效了
console.log(id.description); // id

let obj = {
    [id]: 'joey',
    sex: "boy",
}
obj[id] = 'mole';

// --------------------------------------------


