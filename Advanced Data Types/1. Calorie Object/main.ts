
type CalObject = {
    name?: string,
    calories?: number
}

function CalorieObject(input: string[]): void {
    let result: CalObject[] = [];

    input.forEach((x, index) => {
        let calObject: CalObject = {};
        if (index % 2 === 0) {
            calObject.name = x;
        }
        else {
            calObject.calories = parseInt(x);
        }
        result.push(calObject);
    })

    console.log(result)
}


CalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
