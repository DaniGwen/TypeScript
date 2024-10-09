var input = ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'];
var Town = /** @class */ (function () {
    function Town(town, latitude, longitude) {
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Town;
}());
function ParseTableRowsToObject(rows) {
    var towns = [];
    rows.forEach(function (x) {
        var row = x.split(" | ");
        var town = new Town(row[0], parseFloat(row[1]).toFixed(2), parseFloat(row[2]).toFixed(2));
        towns.push(town);
    });
    return towns;
}
console.log(ParseTableRowsToObject(input));
