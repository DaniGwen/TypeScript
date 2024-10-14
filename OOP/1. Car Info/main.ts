const input: string = "Chevrolet Impala 390";

class Car {
    public brand: string;
    public model: string;
    public horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    public PrintCar(){
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`)
    }
}

function CreateCar(input: string) {
    let carArgs = input.split(" ");
    let car = new Car(carArgs[0], carArgs[1], parseInt(carArgs[2]))
    car.PrintCar();
}

CreateCar(input);
