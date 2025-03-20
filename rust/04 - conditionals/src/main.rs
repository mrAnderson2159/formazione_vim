fn main() {
    let n: i32 = 5;

    if n < 5 {
        println!("n is less than 5");
    } else if n == 5 {
        println!("n is equal to 5");
    } else {
        println!("n is greater than 5");
    }

    let marks: i32 = 95;
    let mut grade: char = 'N';

    match marks {
        90..=100 => grade = 'A', // 90 to 100 inclusive
        80..=89 => grade = 'B',
        70..=79 => grade = 'C',
        _ => grade = 'F',
    }

    println!("Grade: {}", grade);
}
