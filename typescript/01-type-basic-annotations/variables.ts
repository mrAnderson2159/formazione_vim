let movieTitle: string = "Inception";
movieTitle = "Interstellar"; // This is valid
// movieTitle = 123; // This will cause a TypeScript error because 123 is not a string

let x: number = 10;

let xIsNumber: boolean = typeof x === "number"; // This will be true

// type inference
let y = 20; // TypeScript infers the type as number

// type Any
let whatever: any;

whatever = "Hello"; // This is valid
whatever = 123; // This is also valid
whatever = true; // This is also valid
