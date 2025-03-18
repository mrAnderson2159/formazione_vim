fn main() {
    let x = 5;
    let y = &x;
    let z = &y;

    /* 
    L'idea è la stessa dei puntatori in C, qui abbiamo che y è un puntatore a x e z è un puntatore a y,
    quindi un puntatore a un puntatore ad x. Questo significa proprio che il valore di y è l'indirizzo di x
    ed il valore di z è l'indirizzo di y. Per accedere al valore di x tramite z dobbiamo dereferenziare
    due volte, quindi **z.

    Ciò che può sembrare bizzarro rispetto ad un punto di vista C-like, è che le 6 stampe che seguono
    sono tutte uguali, cioè 5. Questo è dovuto al fatto che Rust utilizza un meccanismo 
    chiamato "deref coercion" che permette di dereferenziare ricorsivamente i puntatori fino al
    valore finale puntato.
    */

    println!("x: {}", x); // 5
    println!("y: {}", y); // dovrebbe essere &i32 = 0x7ff... ma stampa 5 per deref coercion
    println!("z: {}", z); // dovrebbe essere &&i32 = 0x2fa... ma stampa 5 per deref coercion
    println!("*y: {}", *y); // 5 per normale dereferenziazione
    println!("*z: {}", *z); // 5 per deref coercion
    println!("**z: {}", **z); // 5 per normale dereferenziazione


    // Se volessi stampare l'indirizzo effettivo:
    println!("indirizzo di x: {:p}", y);
    println!("indirizzo di y (cioè z): {:p}", z);
    println!("indirizzo di x: {:p}", *z);

    // Ora vediamo un altro esempio, partendo dagli scalar data type (salvati nello stack)
    // e dal comportamento della copia tramite dereferenziazione.

    let mut some_data: i32 = 42;
    let ref_1: &mut i32 = &mut some_data;

    // NB: ref_1 è un riferimento mutabile, quindi può modificare il valore a cui punta 
    // (*ref_1 = 44 è valido).
    // Tuttavia, il binding `ref_1` non è dichiarato come `mut`, quindi non può essere riassegnato
    // (ref_1 = &mut some_other_data genera errore).
    // Se vogliamo poter riassegnare `ref_1` ad altri riferimenti mutabili, dobbiamo dichiararlo con 
    // `let mut ref_1`.

    let deref_copy: i32 = *ref_1; // 42 - Qui riserviamo una nuova zona di memoria nello stack per `deref_copy`
    // e vi copiamo il valore puntato da `ref_1`.

    *ref_1 = 13; // Modifichiamo il valore puntato da `ref_1`

    println!("some_data è stato modificato tramite il suo riferimento ref_1: {}", some_data); // 13
    println!("mentre deref_copy è rimasto invariato: {}", deref_copy); // 42

    // Ora invece vediamo cosa succede con i compound data type (allocati nello heap)

    let mut heap_data: Vec<i32> = vec![1, 2, 3];
    let ref_2: &mut Vec<i32> = &mut heap_data;

    // let deref_copy_2: Vec<i32> = *ref_2; // ❌ ERRORE!
    // Cercando di assegnare il vettore a `deref_copy_2`, stiamo tentando di spostare la ownership di `heap_data`
    // in `deref_copy_2`, ma non è possibile perché `heap_data` è già preso in prestito mutabilmente da `ref_2`.
    // Questo renderebbe `ref_2` un dangling pointer, cosa che Rust impedisce per sicurezza.

    // Se vogliamo davvero ottenere una copia, dobbiamo usare `clone()` che crea una copia profonda dello heap:
    let deref_copy_2: Vec<i32> = ref_2.clone();

    let tuple = (String::from("Hello"), 42);
    // let (s, num) = tuple;

    // mettiamo di volere un riferimento alla stringa e un assegnare il numero a una variabile che ne otterrà la 
    // ownership. Possiamo fare così:
    let (ref s, num) = tuple;
    // ora `s` è un riferimento a `String` e `num` è un `i32`.
}
