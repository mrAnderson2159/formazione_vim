fn main() {
    // Integer data types
    let a: i8 = 10;
    let b: i16 = 20;
    let c: i32 = 30;
    let d: i64 = 40;
    let e: i128 = 50;
    let f: isize = 60;

    // Floating-point data types
    let g: f32 = 70.0;
    let h: f64 = 80.0;

    // Boolean data type
    let i: bool = true;

    // Character data type
    let j: char = 'A';

    // Type aliasing
    type MyInt = i32;
    let k: MyInt = 90;

    // Type conversion
    let l: i32 = 100;
    let m: f32 = l as f32;
}
