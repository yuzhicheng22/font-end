function printNumber(from, to) {
    let current = from;
    setTimeout(function run() {
        console.log(current);
        if (current < to) {
            setTimeout(run, 1000);
        }
        current++;
    }, 1000);
}

//printNumber(1, 6);
function printNumber_2(from, to) {
    let current = from;
    let id = setInterval(() => {
        console.log(current)
        if (current >= to) {
            clearInterval(id);
        }
        current++;
    }, 1000);
}
printNumber_2(1, 6);