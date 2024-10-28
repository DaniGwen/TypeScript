"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length >= this.buttonCapacity) {
            return;
        }
        this.drinks.push(drink);
    }
    removeDrink(name) {
        let drink = this.drinks.find(x => x.name === name);
        if (drink) {
            this.drinks.splice(this.drinks.indexOf(drink), 1);
            return true;
        }
        return false;
    }
    getLongest() {
        let sortedDrinks = this.drinks.sort((a, b) => b.volume - a.volume);
        return sortedDrinks[0].toString();
    }
    getCheapest() {
        let sortedDrinks = this.drinks.sort((a, b) => a.price - b.price);
        return sortedDrinks[0].toString();
    }
    buyDrink(name) {
        let drink = this.drinks.find(x => x.name === name);
        return drink.toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        return `Drinks available:\n` + this.drinks.map(x => x.toString()).join("\n");
    }
}
exports.VendingMachine = VendingMachine;
