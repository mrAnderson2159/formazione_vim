const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["one", "two", "three"];
const booleans: boolean[] = [true, false, true];

const moreNumbers: Array<number> = [1, 2, 3, 4, 5];
const moreStrings: Array<string> = ["one", "two", "three"];
const moreBooleans: Array<boolean> = [true, false, true];

const poorlyTypedMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

type Row = [number, number, number];
type Matrix3x3 = [Row, Row, Row];

const wellTypedMatrix: Matrix3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
