let player = {
    id: 'joey',
    level: 10,
    money: 564,
}

let temp_1 = {
    canView: true,
}
let temp_2 = {
    canEdit: false,
}

Object.assign(player, temp_1, temp_2);
for (let key in player) {
    console.log(player[key]);
}

let clone = Object.assign({}, player, { id: 'baby' });
for (let key in clone) {
    console.log(clone[key]);
}

//深拷贝
//我们可以使用递归来实现它。或者为了不重复造轮子，采用现有的实现，例如 lodash 库的 _.cloneDeep(obj)。