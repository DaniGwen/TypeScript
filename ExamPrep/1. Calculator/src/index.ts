const input: string[] = ["5", "+", "10"];
const input2: string[] = ["25.5", "-", "3"];

const operations: { [key: string]: (a: number, b: number) => number } = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b
}

function Calculate(input: string[]): string {
    let [a,operator,b] = [parseFloat(input[0]),input[1],parseFloat(input[2])];
    let result: number;

    if(!operations[operator]){
        throw new Error("Invalid operation!");
    }

    result = operations[operator](a,b);
    return result.toFixed(2);
}

console.log(Calculate(input));
console.log(Calculate(input2));