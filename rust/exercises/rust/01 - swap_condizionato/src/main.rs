fn main() {
    let mut a: i32 = 11;
    let mut b: i32 = 9;

    println!("BEFORE SWAP: a: {a}, b: {b}");

    swap_if_greater(&mut a, &mut b);

    println!("AFTER SWAP: a: {a}, b: {b}");
}

fn swap_if_greater(a: &mut i32, b: &mut i32) {
    if *a > *b {
        *a += *b;
        *b = *a - *b;
        *a -= *b;
    }
}
