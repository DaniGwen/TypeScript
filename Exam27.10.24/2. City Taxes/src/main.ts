class City {
    private name: string;
    public population: number;
    public treasury: number;
    private taxRate: number = 10;

    constructor(name: string, population: number, treasury: number) {
        this.name = name;
        this.population = population;
        this.treasury = treasury;
    }

    collectTaxes(): void {
        this.treasury += this.population * this.taxRate;
    }

    applyGrowth(percentage: number): void {
        this.population = this.population * (1 + percentage / 100);
    }

    applyRecession(percentage: number): void {
        this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
    }
}

function cityTaxes(name: string, population: number, treasury: number): City {
    return new City(name, population, treasury);
}




const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
