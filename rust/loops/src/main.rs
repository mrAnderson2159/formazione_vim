fn main() {
    // loop
    // assimiglia a while true in diversi linguaggi
    let mut counter = 0;
    loop {
        counter += 1;
        if counter == 10 {
            break;
        }
    }
    println!("counter: {}", counter);

    // la grande potenza di flutter sta nel fatto che puoi usare break per uscire da un loop
    // preciso in una serie di loop annidati utilizzando le annotazioni: " 'label loop ",  "break 'label"
    'outer: loop {
        println!("outer loop");
        'inner: loop { // WARNING: unused label
            println!("inner loop");
            break 'outer;
        }
    } // in questo caso viene eseguito il loop esterno, entrando nel loop interno il quale fermerà 
      // direttamente il loop esterno


    // return value
    // un loop può restituire un valore, questa cosa si usa quando si cerca di eseguire un comando in 
    // attesa di un risultato, quindi assegnarlo a una variabile
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2; // restituisce il valore 20 e termina il loop, salvando il valore in result
        }
    };
    println!("result: {}", result);

    

    // for loop
    // iterare su una sequenza di elementi
    let array = [10, 20, 30, 40, 50];
    for element in array.iter() {
        println!("element: {}", element);
    }

    let vector: Vec<i32> = vec![100, 200, 300, 400, 500];
    for element in vector {
        println!("element: {}", element);
    }


    // while loop
    // è come negli altri linguaggi...
    let mut counter = 0;
    while counter < 10 {
        counter += 1;
    }
    println!("counter: {}", counter);
}
