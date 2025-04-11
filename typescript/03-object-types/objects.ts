/*
    I can tell a function that i want to pass an object with specific properties
    and types for those properties
    This is called an object type
*/
function printName(person: { first: string; last: string }): void {
    console.log(`Hello ${person.first} ${person.last}`);
}

printName({ first: "John", last: "Doe" }); // OK
printName({ first: "John" }); // Error: Property 'last' is missing
printName({ first: "John", last: "Doe", age: 30 }); // Error: age is not expected
// But...
const person = { first: "John", last: "Doe", age: 30 };
printName(person); // OK, but not recommended
// because the function expects an object with only first and last properties

let coordinates: { x: number; y: number } = { x: 10, y: 20 };

function randomCoordinates(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}
