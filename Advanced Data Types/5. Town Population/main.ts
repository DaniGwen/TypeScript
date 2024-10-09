const input: Array<string> = ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'];

const input2: Array<string> = ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'];



type City = {
    name: string,
    population: number
}

function AddAndCalculateTownPopulations(input: Array<string>): Array<City> {
    let cities: City[] = [];

    input.forEach(x => {
        let args = x.split("<->");
        let town: City = {
            name: args[0],
            population: parseInt(args[1])
        }

        let existingCityIndex = -1;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === town.name) {
                existingCityIndex = i;
                break;
            }
        }

        if (existingCityIndex !== -1) {
            cities[existingCityIndex].population += town.population;
        }
        else {
            cities.push(town);
        }
    })

    return cities;
}

console.log(AddAndCalculateTownPopulations(input));
console.log(AddAndCalculateTownPopulations(input2));