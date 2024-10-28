import { Drink } from "./Drink";
import { VendingMachine } from "./VendingMachine";

function main() {
    //Initialize the repository (VendingMachine)
    const vendingMachine = new VendingMachine(6);

    //Initialize Entity (Drink)
    const tea = new Drink("Tea", 1.5, 300);
    const coffee = new Drink("Coffee", 2.0, 120);
    const hotChocolate = new Drink("Hot Chocolate", 2.5, 200);
    const latte = new Drink("Latte", 3.5, 220);
    const cappuccino = new Drink("Cappuccino", 2.8, 180);
    const mocha = new Drink("Mocha", 2.1, 150);
    const herbalTea = new Drink("Herbal Tea", 1.75, 300);

    //Get Count
    console.log(vendingMachine.getCount());

    //Add Drinks
    vendingMachine.addDrink(tea);
    vendingMachine.addDrink(coffee);
    vendingMachine.addDrink(hotChocolate);
    vendingMachine.addDrink(latte);
    vendingMachine.addDrink(cappuccino);
    vendingMachine.addDrink(mocha);

    //Try to add drinks when the capacity is full
    vendingMachine.addDrink(herbalTea);

    //Get Count
    console.log(vendingMachine.getCount());

    //Remove Drink
    console.log(vendingMachine.removeDrink("Herbal Tea"));
    console.log(vendingMachine.removeDrink("Tea"));

    //Get Longest Drink
    console.log(vendingMachine.getLongest());

    //Get Cheapest Drink
    console.log(vendingMachine.getCheapest());

    //Buy a specific Drink
    console.log(vendingMachine.buyDrink("Cappuccino"));

    //Drinks Report
    console.log(vendingMachine.report());
}
main();
