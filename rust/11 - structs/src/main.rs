struct Car {
    owner: String,
    year: u32,
    fuel_level: f32,
    price: u32,
}

fn main() {
    let my_car = Car {
        owner: String::from("Valerio"),
        year: 2016,
        fuel_level: 0.4,
        price: 43000,
    };

    let car_year = my_car.year;
    my_car.fuel_level = 0.5; // Errore: non è possibile assegnare a `my_car.fuel_level` perché i campi sono immutabili per impostazione predefinita

    let mut your_car = Car {
        owner: String::from("Alice"),
        year: 2023,
        fuel_level: 0.6,
        price: 20000,
    };

    your_car.fuel_level = 0.7; // ok
    let extract_owner = your_car.owner; // questo ha cambiato la ownershiè del campo (compound data heap), che da ora in poi non è più disponibile
    println!("Owner: {}", your_car.owner); // Errore: value borrowed here after move

    let his_car = Car {
        owner: String::from("Bob"),
        ..your_car // possiamo usare la sintassi `..` per copiare i campi da un'altra istanza
        // ma ATTENZIONE: solo gli scalar data type verranno copiati senza "fare danni", 
        // i dati memorizzati nello heap cambieranno ownership
    };

    // risolviamo il problema di ownership con il metodo `clone`
    let his_car_owner = his_car.owner.clone();
    println!("Owner: {}", his_car_owner); // ok


    // Tuple structs
    let point_2D: (i32, i32) = (3, 4);
    let point_3D: (i32, i32, i32) = (8, 12, 15);

    struct Point2D(i32, i32);
    struct Point3D(i32, i32, i32);

    let point1 = Point2D(3, 4);
    let point2 = Point3D(8, 12, 15);


    // Unit structs
    struct EmptyStruct; // scopriremo più avanti a cosa servono
    
}
