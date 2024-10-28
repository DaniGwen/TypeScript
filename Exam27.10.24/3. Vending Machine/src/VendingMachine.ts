import { Drink } from "./Drink";

export class VendingMachine {
    private drinks: Array<Drink>;
    private buttonCapacity: number;

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    public addDrink(drink: Drink): void {
        if (this.drinks.length >= this.buttonCapacity) {
            return;
        }

        this.drinks.push(drink);
    }

    public removeDrink(name: string): boolean {
        let drink = this.drinks.find(x => x.name === name);
        if (drink) {
            this.drinks.splice(this.drinks.indexOf(drink), 1);
            return true;
        }
        return false;
    }

    public getLongest(): string {
        let sortedDrinks = this.drinks.sort((a, b) => b.volume - a.volume);
        return sortedDrinks[0].toString();
    }

    public getCheapest(): string {
        let sortedDrinks = this.drinks.sort((a, b) => a.price - b.price);
        return sortedDrinks[0].toString();
    }

    public buyDrink(name: string): string {
        let drink = this.drinks.find(x => x.name === name);
        return drink.toString();
    }

    public getCount(): number {
        return this.drinks.length;
    }

    public report(): string {
        return `Drinks available:\n` + this.drinks.map(x => x.toString()).join("\n");
    }
}