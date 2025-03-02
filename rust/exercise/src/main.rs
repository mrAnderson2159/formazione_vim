// Problem 5:


/*
A Pythagorean triple consists of three positive integers a, b, and c, satisfying the condition a^2 + b^2 = c^2. 
These triples are commonly written as (a, b, c), and a well-known example is (3, 4, 5).

Write a program that computes the Pythagorean triplet such that a < b < c and a + b + c = 1000. 
*/

fn main()
{
    /* Your Code here */
    for m in (16..22).rev() {
        for n in (1..m).rev().step_by(2) {
            if is_valid_n(m, n) {
                let a: u16 = (m as u16).pow(2) - (n as u16).pow(2);
                let b: u16 = 2 * (m as u16) * (n as u16);
                let c: u16 = (m as u16).pow(2) + (n as u16).pow(2);
                
            }
        }
    }
    
}

fn mcd(mut m: u8, mut n: u8) -> u8 {
    assert!(m > n);
    
    while n != 0 {
        let temp = n;
        n = m % n;
        m = temp;
    }
    
    m
}

fn is_odd(x: u8) -> bool {
    x % 2 == 1
}

fn is_valid_n(m: u8, n: u8) -> bool {
    assert!(is_odd(m) != is_odd(n));

    mcd(m, n) == 1
}












