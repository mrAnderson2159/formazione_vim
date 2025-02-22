#include <iostream>
#include "../utilities.hpp"

using namespace std;
using namespace math;
using namespace utils;

int main() {
    int size;

    print("Questo programma calcola il massimo tra n numeri interi");
    print("Quanti numeri vuoi inserire?");
    
    size = int_input();

    int *numbers = (int *) malloc(sizeof (int) * size);

    cout << "Inserisci " << size << " numeri" << endl;

    for (size_t i = 0; i < size; i++) 
        numbers[i] = int_input();
    
    int max = find_max(numbers, size);

    cout << "Il massimo è " << max << endl;

    // Libera la memoria allocata dinamicamente
    free(numbers);
}