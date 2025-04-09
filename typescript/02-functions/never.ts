// error functions
function error(message: string): never {
    throw new Error(message);
}
// The function never returns a value, because it always throws an error

// Eternal loop
function infiniteLoop(): never {
    while (true) {
        console.log("Infinite loop");
    }
}
// The function never returns a value, because it is an infinite loop

function decorator(
    decorated: (...args: number[]) => number,
    handler: () => never
): () => number | never {
    return function () {
        try {
            return decorated();
        } catch (e) {
            return handler();
        }
    };
}

// void <> never !!!
