#include <iostream>
#include <math.h>
#include "../utilities.hpp"

using namespace std;
using namespace utils;

int fib(int n) {
    if (n < 2)
        return n;
    
    float fi = (1 + sqrt(5)) / 2;
    float result = (pow(fi, n) - pow(-fi, -n)) / sqrt(5);

    return round(result);
}

int main() {
    print("Questo programma stampa n termini della sequenza di fibonacci\n");

    int n;
    
    print("Inserisci il numero di termini");
    n = int_input();

    for (size_t i = 0; i < n; i++) 
        cout << fib(i) << " ";
    
    cout << endl;
}