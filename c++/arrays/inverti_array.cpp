#include <iostream>
#include "../utilities.hpp"

using namespace std;
using namespace utils;
using namespace arrays;

int main() {
    print("Questo programma inverte i numeri in un array\n");

    print("Inserisci la dimensione dell'array");
    int size = int_input();

    int *array = (int *) malloc(sizeof(int) * size);

    cout << "Inserisci i " << size << " valori dell'array" << endl;

    for (size_t i = 0; i < size; i++) 
        array[i] = int_input();
    
    reverse(array, size);
    print(array, size);

    free(array);
}
