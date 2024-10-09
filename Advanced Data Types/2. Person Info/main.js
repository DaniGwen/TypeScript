function PersonCreator(firstName, lastName, age) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        age: +age
    };
    return person;
}
console.log(PersonCreator("peter", "pan", "20"));
