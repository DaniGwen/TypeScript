var input = ["5", "+", "10"];
var input2 = ["25.5", "-", "3"];
var operations = {
    "+": function (a, b) { return a + b; },
    "-": function (a, b) { return a - b; },
    "/": function (a, b) { return a / b; },
    "*": function (a, b) { return a * b; }
};
function Calculate(input) {
    var _a = [parseFloat(input[0]), input[1], parseFloat(input[2])], a = _a[0], operator = _a[1], b = _a[2];
    var result;
    if (!operations[operator]) {
        throw new Error("Invalid operation!");
    }
    result = operations[operator](a, b);
    return result.toFixed(2);
}
console.log(Calculate(input));
console.log(Calculate(input2));
