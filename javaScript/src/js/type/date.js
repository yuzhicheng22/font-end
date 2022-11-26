let time = new Date();
console.log(time);

let date01_1970 = new Date(0);
console.log(date01_1970);
let date02_1970 = new Date(30 * 3600 * 1000);
console.log(date02_1970);

let birthday = new Date(2000, 5, 12);
console.log(birthday);

console.log(birthday.getFullYear());

//Task=============================

let dateObj = new Date(2012, 1, 20, 3, 12);
console.log(dateObj);

//---------------------------------

function getWeekDay(date) {
    let week = [`SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`]
    return week[date.getDay()];
}
console.log(getWeekDay(dateObj));

//-------------------------------
let date = new Date(2015, 0, 2);
function getDaysAgo(date, days) {
    return new Date(date.getTime() - days * 3600 * 24 * 1000);
}
console.log(getDaysAgo(date, 1));
console.log(getDaysAgo(date, 2));
console.log(getDaysAgo(date, 365));

//----------------------------------

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

