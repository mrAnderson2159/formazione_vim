type coordinates = {
    x: number;
    y: number;
};

function randomCoordinates(): coordinates {
    return { x: Math.random(), y: Math.random() };
}

const point: coordinates = randomCoordinates();
console.log(point.x, point.y); // OK

// Nested object and optional properties

type Person = {
    name: string;
    age: number;
    parents?: {
        dad?: Person;
        mom?: Person;
    };
};

const mark: Person = {
    name: "Mark",
    age: 47,
};

const judith: Person = {
    name: "Judith",
    age: 42,
};

const ellie: Person = {
    name: "Ellie",
    age: 17,
    parents: {
        dad: mark,
        mom: judith,
    },
};
