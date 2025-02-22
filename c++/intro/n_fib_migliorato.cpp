#include <iostream>
#include <cmath> // Usa cmath invece di math.h
#include "../utilities.hpp"

using namespace std;
using namespace utils;

int fib(int n) {
    if (n < 2)
        return n;
    
    // L'utilizzo di static rende il valore persistente tra le chiamate di funzione, questo permette di calcolare
    // sia sqrt5 sia fi una volta soltanto, a prescindere da quante volte verrà richiamata fib
    static const double sqrt5 = sqrt(5); // Evita ricalcoli inutili
    static const double fi = (1 + sqrt5) / 2;

    return round((pow(fi, n) - pow(-fi, -n)) / sqrt5);
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