// parameter annotations
function square(x: number) {
    return x * x;
}

let x = square(10);

// default parameter
function multiply(x: number, y: number = 1) {
    return x * y;
}

let y = multiply(10); // y = 10
y = multiply(10, 2); // y = 20

// return type annotation
function add(x: number, y: number): number {
    return x + y;
}
let z = add(10, 20); // z = 30

// anonimous function
const colors = ["red", "green", "blue"];
colors.map((color) => color[0].toUpperCase() + color.slice(1));
// color is implicitly of type 'string', because the array is of type 'string[]'
// but we can annotate it

// void function
// Is not necessary to annotate the return type of a function that does not return a value
// but it is a good practice to do so
function printUpperCase(name: string): void {
    console.log(name.toUpperCase());
}
