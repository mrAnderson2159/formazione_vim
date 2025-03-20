fn main() {
   // Ogni valore in Rust ha una variabile che è il suo proprietario
   // Quando il proprietario esce dallo scope, il valore viene deallocato
   // Questo è il concetto di ownership

    let s1: String = String::from("hello");
    let s2: String = s1; // s1 è stato spostato in s2
    // println!("{}", s1); // errore: s1 non è più valido

    // Per clonare un valore, si può usare il metodo clone
    let s3: String = s2.clone();
    println!("{}", s2); // s2 è ancora valido

  


    // Ownership e funzioni
    let s4: String = String::from("hello");
    take_ownership(s4); // s4 è stato spostato in take_ownership
    // println!("{}", s4); // errore: s4 non è più valido

    // Passare una variabile per valore ad una funzione corrisponde a spostare il valore
    // in un'altra variabile, infatti è così, un passaggio per valore corrisponde ad una copia
    // del valore. Per evitare la copia sarebbe bene passare per valore qualsiasi dato che abbia
    // un puntatore nello heap
}

fn take_ownership(s: String) {
    println!("{}", s);
    // s esce dallo scope e viene deallocato
}