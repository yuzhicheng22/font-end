//可选链:嵌套对象在未定义时被读取产生错误的 "优雅"的解决方式
// ?.

let user = {};

//1.
if (user.address.street) {
    alert(user.address.street);
} else {
    alert(undefined);
}
//2.

alert(user.address ? user.address.street ? user.address.street.name : undefined : undefined);

//2.
alert(user.address && user.address.street);

//3.
alert(user?.address?.street);

