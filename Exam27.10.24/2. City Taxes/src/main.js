class City {
    constructor(name, population, treasury) {
        this.taxRate = 10;
        this.name = name;
        this.population = population;
        this.treasury = treasury;
    }
    collectTaxes() {
        this.treasury += this.population * this.taxRate;
    }
    applyGrowth(percentage) {
        this.population = this.population * (1 + percentage / 100);
    }
    applyRecession(percentage) {
        this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
    }
}
function cityTaxes(name, population, treasury) {
    return new City(name, population, treasury);
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
