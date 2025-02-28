fn main() {
    // &str and String
    let fixed_str: &str = "Fixed length string";
    let mut flexible_str: String = String::from("Flexible length string");
    flexible_str.push_str(" with more text");

    println!("Fixed length string: {}", fixed_str);
    println!("Flexible length string: {}", flexible_str);

    // Array
    let fixed_array: [i32; 3] = [1, 2, 3]; // mantiene la stessa lunghezza ed è in sola lettura
    let mut flexible_array: [i32; 3] = [0; 3]; // mantiene la stessa lunghezza ma è modificabile; 
    // [n; m] inizializza un array di m elementi con valore n, in python corrisponde a [n] * m

    // fixed_array[1] = 10; // errore: non è possibile modificare un array in sola lettura
    flexible_array[1] = 10;

    println!("Fixed array: {:?}", fixed_array); // la notazione {:?} permette di stampare un array
    println!("Flexible array: {:?}", flexible_array);

    // Vec
    let mut flexible_vec: Vec<i32> = vec![1, 2, 3]; // può cambiare lunghezza e contenuto
    flexible_vec.push(4);
    // N.B. Non dichiarare vector senza mut, è inutile, usa un array al posto

    // Tuple
    let tuple: (i32, f64, char) = (42, 3.14, 'a');
    let age = tuple.0; // accesso tramite indice
    let (x, y, z) = tuple; // destrutturazione

    println!("Tuple: {:?}", tuple);
    println!("Age: {}", age);
    println!("Tuple destrutturata: x = {}, y = {}, z = {}", x, y, z);
}
