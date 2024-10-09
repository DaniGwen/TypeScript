const input: Array<string> = ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']

class Town {
    town: string;
    latitude: string;
    longitude: string;
    constructor(town: string, latitude: string, longitude: string) {
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

function ParseTableRowsToObject(rows:string[]): Array<Town>{
    let towns:Array<Town> = [];
    rows.forEach(x => {
        let row = x.split(" | ")
        let town = new Town(row[0], parseFloat(row[1]).toFixed(2),parseFloat(row[2]).toFixed(2));
        towns.push(town);
    })

    return towns;
}

console.log(ParseTableRowsToObject(input))