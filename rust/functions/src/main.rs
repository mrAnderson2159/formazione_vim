fn main() {
    my_fn("This is my function");
    let s: &str = "Function called on a variable";
    my_fn(s);
    let a: i32 = 5;
    let b: i32 = 10;
    let result: i32 = multiply(a, b);
    println!("{result}");

    let (sum, diff, prod) = basic_math(a, b);
    println!("Sum: {sum}, Diff: {diff}, Prod: {prod}");

    // Code block 
    let full_name: &str = {
        let first_name: &str = "John";
        let last_name: &str = "Doe";
        format!("{first_name} {last_name}"); // Ritorna il valore dell'ultima espressione, molto potente!
    };
}

// Funzioni
fn my_fn(s: &str) {
    println!("{s}"); 
}

fn multiply(a: i32, b: i32) -> i32 {
    println!("{a} * {b} = {}", a * b);
    a * b // valore di ritorno SENZA punto e virgola
    // Se si vuole ritornare un valore prima della fine della funzione si usa la keyword return
}

fn basic_math(a: i32, b: i32) -> (i32, i32, i32) {
    let sum: i32 = a + b;
    let diff: i32 = a - b;
    let prod: i32 = a * b;
    (sum, diff, prod)
}