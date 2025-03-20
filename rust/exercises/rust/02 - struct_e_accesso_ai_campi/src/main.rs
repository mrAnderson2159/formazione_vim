struct Book {
    title: String,
    pages: u32,
}

fn main() {
    let mut book: Book = Book {
        title: String::from("Analisi matematica 2"),
        pages: 394,
    };

    println!("Book title: {}", &book.title); // Creiamo un riferimento immutabile a book.title per evitare che println! ne prenda la ownership

    book.pages = 494;

    let _steal_ownership: String = book.title;

    // println!("Book title after stealing ownership: {}", book.title); // non viene neanche compilato, come ovvio...
}
