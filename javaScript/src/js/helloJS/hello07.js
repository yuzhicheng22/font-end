//箭头函数
let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}
ask(
    'Do you agree?',
    () => console.log('You agreed.'),
    () => console.log('You canceled the execution')
)
