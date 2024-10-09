type Person = {
    firstName: string,
    lastName: string,
    age: number
}

function PersonCreator(firstName: string, lastName: string, age: string): Person {
    let person: Person = {
        firstName: firstName,
        lastName: lastName,
        age: +age
    }
    return person;
}

console.log(PersonCreator("peter", "pan", "20"))