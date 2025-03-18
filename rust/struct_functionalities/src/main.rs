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
}
