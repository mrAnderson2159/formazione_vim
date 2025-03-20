fn main() {
    // commento singolo

    /*
    commento multilinea
    */

    print!("Questo testo ");
    print!("è su una sola riga\n");

    println!(
        "I am {2} from {1} years and I {0} it",
        "love", 7, "programming"
    );

    println!("{language} is a programming language which is cool to {activity} with",
             language="Rust", activity="code");

    // Input
    let mut s: String = String::new();
    println!("Inserisci qualcosa: ");
    std::io::stdin().read_line(&mut s).expect("Errore durante la lettura dell'input");
    println!("Hai inserito: {}", s);

    // Input con conversione
    let mut n: String = String::new();

    println!("Inserisci un numero: ");
    std::io::stdin().read_line(&mut n)
        .expect("Errore durante la lettura dell'input");
    
    // parse effettua la conversione da stringa a f64
    let n: f64 = n.trim().parse().expect("Errore durante la conversione");
    
    println!("Hai inserito: {}", n);

    let _unused_variable: i32 = 5; // usare l'underscore per evitare il warning

    let big_number: i64 = 100_000_000; // per rendere più leggibile il numero

    static VERY_GLOBAL_VARIABLE: &str = concat!(
        "Questa variabile è disponibile in tutto il programma e ",
        "dura per tutta l'esecuzione del programma."
    );

}
