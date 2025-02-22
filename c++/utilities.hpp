#ifndef UTILITIES_HPP // macro di guardia: se UTILITIES_HPP non è già stato incluso allora prosegui alla lettura
#define UTILITIES_HPP // macro di definizione: definisce questo file come UTILITIES_HPP, quindi, se il compilatore
                      // l'ha già incluso continua e basta

#include <iostream>
#include <vector>
using namespace std;

namespace utils {
    int int_input() {
        int temp;
        cout << "> ";
        cin >> temp;
        return temp;
    }

    void print(string prompt) {
        cout << prompt << endl;
    }
}


namespace swap {
    void swap(int *a, int *b) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }
}

namespace arrays {
    vector<int> get_array() {
        utils::print("Inserisci la dimensione dell'array");
        int size = utils::int_input();
    
        vector<int> array(size); 
    
        cout << "Inserisci i " << size << " valori dell'array" << endl;
    
        for (int &num : array)  
            num = utils::int_input();

        return array;
    }

    int index(const int search, const vector<int>& v) {
        for (size_t i = 0; i < v.size(); i++) 
            if (v[i] == search)
                return i;
        
        return -1;
    }

    void reverse(int array[], int size) {
        int j; 

        for (size_t i = 0; i < (int) (size / 2); i++) {
            j = size - i - 1;

            if (i != j)
                swap::swap(array + i, array + j);
        }
    }

    void print(int array[], int size) {
        for (size_t i = 0; i < size; i++)
            cout << array[i] << " ";
        
        cout << endl;
    }
}

namespace math {
    int find_max(int num_array[], int size) {
        int max = num_array[0];

        for (size_t i = 0; i < size; i++) {
            if (num_array[i] > max)
                max = num_array[i];
        }
        
        return max;
    }
}

#endif // chiude l'ifndef
