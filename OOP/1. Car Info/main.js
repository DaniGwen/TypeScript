var input = "Chevrolet Impala 390";
var Car = /** @class */ (function () {
    function Car(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    Car.prototype.PrintCar = function () {
        console.log("The car is: ".concat(this.brand, " ").concat(this.model, " - ").concat(this.horsePower, " HP."));
    };
    return Car;
}());
function CreateCar(input) {
    var carArgs = input.split(" ");
    var car = new Car(carArgs[0], carArgs[1], parseInt(carArgs[2]));
    car.PrintCar();
}
CreateCar(input);
