var input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];
var Town = /** @class */ (function () {
    function Town(name, product, price) {
        this.name = name;
        this.product = product;
        this.price = price;
    }
    return Town;
}());
function ProcessLowestProductPrice(input) {
    var towns = [];
    var _loop_1 = function (entry) {
        var townArgs = entry.split("|");
        var town = new Town(townArgs[0], townArgs[1], +townArgs[2]);
        var existingTown = towns.find(function (x) { return x.name === town.name && x.product === town.product; });
        if (existingTown) {
            if (town.price < existingTown.price) {
                towns.splice(towns.indexOf(existingTown), 1);
                towns.push(town);
                return "continue";
            }
        }
        towns.push();
    };
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var entry = input_1[_i];
        _loop_1(entry);
    }
    towns.sort(function (a, b) { return a.price - b.price; });
    return towns;
}
console.log(ProcessLowestProductPrice(input));
