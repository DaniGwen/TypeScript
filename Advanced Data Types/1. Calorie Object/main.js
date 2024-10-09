function CalorieObject(input) {
    var result = [];
    input.forEach(function (x, index) {
        var calObject = {};
        if (index % 2 === 0) {
            calObject.name = x;
        }
        else {
            calObject.calories = parseInt(x);
        }
        result.push(calObject);
    });
    console.log(result);
}
CalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
