function printAge(age: number | string): void {
    console.log(`Your age is ${age}`);
}

printAge(43);
printAge("13");

// Narrowing
function balance(money: number | string): number {
    if (typeof money === "number") {
        return money;
    } else {
        // Supposing "$23.12" | "€34.56"
        return parseFloat(money.slice(1));
    }
}
