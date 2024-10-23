const input: Array<string> = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];

class Town {
    name?: string;
    product?: string;
    price?: number;
    constructor(name: string, product: string, price: number) {
        this.name = name;
        this.product = product;
        this.price = price;
    }
}

function ProcessLowestProductPrice(input: Array<string>): Array<Town> {
    let towns: Array<Town> = [];
    for (const entry of input) {
        let townArgs = entry.split("|");
        let town = new Town(townArgs[0], townArgs[1], +townArgs[2]);
        let existingTown = towns.find(x =>x.name === town.name && x.product === town.product);
        if(existingTown){
            if(town.price < existingTown.price){
                towns.splice(towns.indexOf(existingTown),1);
                towns.push(town);
                continue;
            }
        }

        towns.push();
    }

    towns.sort((a,b)=> a.price - b.price);

    return towns;
}

console.log(ProcessLowestProductPrice(input));