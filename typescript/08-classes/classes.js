class A {
    classAttribute = 0;
    #privateAttribute = 0; // private attribute
    static staticAttribute = 0; // static attribute
    static #privateStaticAttribute = 0; // private static attribute

    constructor(publicAttribute, privateAttribute) {
        // constructor
        this.publicAttribute = publicAttribute;
        this.privateAttribute = privateAttribute;
    }

    publicMethod() {
        // public method
        console.log("Public Method");
    }
    #privateMethod() {
        // private method
        console.log("Private Method");
    }
    static staticMethod() {
        // static method
        console.log("Static Method");
    }
    static #privateStaticMethod() {
        // private static method
        console.log("Private Static Method");
    }
    get privateAttribute() {
        // getter for private attribute
        return this.#privateAttribute;
    }
    set privateAttribute(value) {
        // setter for private attribute
        this.#privateAttribute = value;
    }
    get staticAttribute() {
        // getter for static attribute
        return A.staticAttribute;
    }
    set staticAttribute(value) {
        // setter for static attribute
        A.staticAttribute = value;
    }
}

// Note: Getters are like python's @property decorated method
// Note: static inside a class means "class level" fields and methods

// Setters:

class Person {
    #name;
    #surname;

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get fullName() {
        return `${this.#name} ${this.#surname}`;
    }
    set fullName(name) {
        const [name, surname] = name.split(" ");
        this.#name = name;
        this.#surname = surname;
    }
}

const person = new Person("John", "Doe");
console.log(person.fullName); // John Doe
person.fullName = "Jane Smith";
console.log(person.fullName); // Jane Smith
