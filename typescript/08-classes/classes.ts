class PersonX {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

class FixedPersonX extends PersonX {
    declare readonly name: string;
    declare readonly surname: string;

    constructor(name: string, surname: string) {
        super(name, surname);
    }
}

class ShortcatPersonX {
    constructor(public name: string, public surname: string) {}
}

class Player {
    private _score: number;
    constructor(public first: string, public last: string) {}

    get score() {
        return this._score;
    }
    set score(value: number) {
        if (value < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = value;
    }
}

class SuperPlayer extends Player {
    constructor(first: string, last: string, public superPower: string) {
        super(first, last);
    }

    maxScore() {
        this._score = 999_999;
    }
}

class PlayerWithProtected {
    protected _score: number = 0;

    constructor(public first: string, public last: string) {}

    get score() {
        return this._score;
    }
    set score(value: number) {
        if (value < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = value;
    }
}

class SuperPlayerWithProtected extends PlayerWithProtected {
    constructor(first: string, last: string, public superPower: string) {
        super(first, last);
    }

    maxScore() {
        this._score = 999_999;
    }
}

abstract class Aclass {
    constructor(public name: string) {}
    abstract sayHi(): string;
}

class Bclass extends Aclass {
    constructor(name: string, public age: number) {
        super(name);
    }

    sayHi() {
        return `Hi, I'm ${this.name}`;
    }
}

class Cclass extends Aclass {
    constructor(name: string, private hash: string) {
        super(name);
    }

    sayHi() {
        return `Hi, I'm ${this.name}`;
    }
}
