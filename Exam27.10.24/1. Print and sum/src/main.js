function printAndSum(start, end) {
    let numbers = [];
    let result = 0;
    for (let i = start; i <= end; i++) {
        numbers.push(i);
        result += i;
    }
    return numbers.join(" ") + `\nSum: ${result}`;
}
console.log(printAndSum(5, 10));
console.log(printAndSum(0, 26));
console.log(printAndSum(50, 60));
