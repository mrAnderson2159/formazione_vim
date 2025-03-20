// --------------------------------------------
//              Borrowing
// --------------------------------------------
/*
- Borrowing Rules
    - At any given time, you can have either one mutable reference or any number of immutable references.
    - References must always be valid.

- Solve out two problems
    - Data race
    - Dangling pointer
*/


fn main() {
    let mut vec_1: Vec<i32> = vec![1, 2, 3, 4, 5];
    let ref1: &mut Vec<i32> = &mut vec_1; // riferimento mutabile, chiediamo in prestito il valore di vec_1 senza prenderne la ownership
    let ref2: &mut Vec<i32> = &mut vec_1; // Errore: non possiamo avere due riferimenti mutabili
    println!("{:?} {:?}", ref1, ref2); // In realtà l'errore sorge per via di questa riga, poiché finché non utilizziamo 
                                        // entrambi i riferimenti, il compilatore non si accorge dell'errore

    let unmut_ref1: &Vec<i32> = &vec_1; // riferimento immutabile
    let unmut_ref2: &Vec<i32> = &vec_1; // riferimento immutabile
    println!("{:?} {:?}", unmut_ref1, unmut_ref2); // Possiamo avere due riferimenti immutabili, pure cinquanta fai te...

    let ref3: &mut Vec<i32> = &mut unmut_ref1; // Errore: non possiamo avere un riferimento mutabile e uno immutabile

    let vec2: &Vec<i32> = {
        let vec1: Vec<i32> = vec![1, 2, 3, 4, 5];
        &vec1 // Errore: vec1 esce dallo scope e il riferimento rimane, in pratica vec1 "non vive abbastanza" per 
                // permettere al riferimento di essere valido
    };
} 