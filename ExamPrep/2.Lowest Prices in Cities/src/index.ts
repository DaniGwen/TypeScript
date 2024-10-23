const input: Array<string> = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];

type Town = {
    name: string;
    product: string;
    price: number;
};

function ProcessLowestProductPrice(input: Array<string>): Array<Town> {
    let towns: Town[] = [];

    for (const entry of input) {
        let townArgs = entry.split("|");
        let town: Town = {
            name: townArgs[0],
            product: townArgs[1],
            price: +townArgs[2]
        };

        let existingProductIndex = -1;

        for (let i = 0; i < towns.length; i++) {
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
        } else {
            towns.push(town);
        }
    }

    towns.sort((a, b) => a.price - b.price);
    return towns;
}


console.log(ProcessLowestProductPrice(input));