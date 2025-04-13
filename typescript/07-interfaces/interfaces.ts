/*
For now they look very similar to type aliases, in future we will see the differences.
*/

interface Person {
    readonly id: number;
    name: string;
    age: number;
    nickname?: string;
    sayHi(): string;
    wasBornIn?: () => number;
    likes?(someone: Person): string;
}

const marioMario: Person = {
    id: 1,
    name: "Mario",
    age: 23,
    sayHi() {
        return `Hi, I'm ${this.name}`;
    },
    wasBornIn() {
        return new Date().getFullYear() - this.age;
    },
};

const luigiMario: Person = {
    id: 2,
    name: "Luigi",
    age: 28,
    sayHi() {
        return `Hi, I'm ${this.name}`;
    },
    likes(person: Person) {
        // parameter can be named anything as long as it is of type Person
        return `I like ${person.name}`;
    },
};

/* ========================== DIFFERENCES BETWEEN INTERFACES AND TYPE ALIASES ========================= */
// 1. Interfaces can be extended, type aliases cannot
interface PersonWithAddress extends Person {
    address: string;
}

// 2. Reopening an interface
interface PersonWithAddress {
    country: string;
}

// 3. Multiple interfaces can be merged
interface SimplePerson {
    name: string;
    age: number;
}

interface Employee {
    job: string;
    salary: number;
}

interface WokringPerson extends SimplePerson, Employee {
    id: number;
}

const workingPerson: WokringPerson = {
    id: 1,
    name: "Mario",
    age: 23,
    job: "Plumber",
    salary: 20000,
};

// 4. Interfaces can be used to define the shape of an object,
// while type aliases can be used to define any type
