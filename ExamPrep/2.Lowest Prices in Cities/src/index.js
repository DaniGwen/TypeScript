var input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];
function ProcessLowestProductPrice(input) {
    var towns = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var entry = input_1[_i];
        var townArgs = entry.split("|");
        var town = {
            name: townArgs[0],
            product: townArgs[1],
            price: +townArgs[2]
        };
        var existingProductIndex = -1;
        for (var i = 0; i < towns.length; i++) {
            if (towns[i].product === town.product) {
                existingProductIndex = i;
                break;
            }
        }
        if (existingProductIndex !== -1) {
            if (town.price < towns[existingProductIndex].price) {
                towns.splice(existingProductIndex, 1);
                towns.push(town);
            }
        }
        else {
            towns.push(town);
        }
    }
    towns.sort(function (a, b) { return a.price - b.price; });
    return towns;
}
console.log(ProcessLowestProductPrice(input));
