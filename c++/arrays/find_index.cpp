#include <iostream>
#include <vector>  // Per usare std::vector
#include "../utilities.hpp"

using namespace std;
using namespace utils;
using namespace arrays;

int main() {
    print("Questo programma trova l'indice di un numero in un array\n");

    vector<int> array = get_array();

    int search;

    print("Inserisci il numero di cui vuoi trovare l'indice");
    search = int_input();

    int search_index = index(search, array);

    if (search_index == -1)
        cout << "Il numero " << search << " non è stato trovato";
    else
        cout << "L'indice di " << search << " è " << search_index;
    
    cout << endl;
}