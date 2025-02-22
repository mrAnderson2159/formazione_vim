#include <iostream>
#include <vector>  // Per usare std::vector
#include "../utilities.hpp"

using namespace std;
using namespace utils;
using namespace arrays;

int main() {
    print("Questo programma inverte i numeri in un array\n");

    print("Inserisci la dimensione dell'array");
    int size = int_input();

    vector<int> array(size); // Usa std::vector invece di malloc

    cout << "Inserisci i " << size << " valori dell'array" << endl;

    for (int &num : array)  // Usa il for-each per semplificare l'input
        num = int_input();
    
    reverse(array.data(), size);  // Usa .data() per ottenere il puntatore all'array interno
    print(array.data(), size);
}
