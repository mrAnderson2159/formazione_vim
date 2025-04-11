type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const colorfulCircle: ColorfulCircle = {
    radius: 10,
    color: "red",
};

type CircleWithArea = Circle & {
    area: () => number;
};

const circleWithArea: CircleWithArea = {
    radius: 10,
    area: function () {
        return Math.PI * this.radius ** 2; // remember that if you use "function" keyword, "this" will refer to the object itself
    },
};

const circleWithArea2: CircleWithArea = {
    radius: 10,
    area: () => Math.PI * circleWithArea2.radius ** 2, // if you use arrow function, "this" will refer to the global object
};
