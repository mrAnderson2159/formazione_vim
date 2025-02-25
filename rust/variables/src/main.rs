fn main() {
    println!("Dichiarazione e inizializzazione di variabili");

    // Definizione: let <nome_variabile>: <tipo> = <valore>;
    let x: i32 = 5;
    let y: f64 = 10.0;
    let z: bool = true;
    let w: char = 'a';

    println!("x: {}", x);
    println!("y: {}", y);
    println!("z: {}", z);
    println!("w: {}", w);

    println!("\nMutability");
    // Le variabili sono immutabili per default
    // let x: i32 = 5;
    // x = 10; // Errore
    // Per rendere una variabile mutabile si usa la keyword mut

    // Mutability: let mut <nome_variabile>: <tipo> = <valore>;
    let mut x: i32 = 5;
    println!("x: {}", x);
    x = 10;
    println!("x: {}", x);

    // Scope
    println!("\nScope");
    let z: i32 = 5;
    {
        let z: i32 = 10;
        println!("z: {}", z);
    }
    println!("z: {}", z);

    // Shadowing
    println!("\nShadowing");
    // La differenza fra shadowing e mutability è che la mutability permette di cambiare un singolo valore,
    // mentre lo shadowing permette di cambiare il tipo e il valore della variabile, creando due variabili
    // distinte dove una nasconde l'altra 
    let x: i32 = 5;
    let x: i32 = x + 1;
    println!("x: {}", x);

    let y: f64 = 10.0;
    let y: i32 = y as i32;
    println!("y: {}", y);

    // Un'altra importante applicazione dello shadowing è associata allo scope, infatti una variabile
    // dichiarata in uno scope può essere ridefinita in un altro scope
    let x: i32 = 5;
    {
        let x: i32 = 10;
        println!("x: {}", x);
    }
    println!("x: {}", x);

    // Costanti
    println!("\nCostanti");
    // Le costanti sono dichiarate con la keyword const
    // const <nome_costante>: <tipo> = <valore>;
    const MAX_POINTS: u32 = 100_000;
    println!("MAX_POINTS: {}", MAX_POINTS);
}
