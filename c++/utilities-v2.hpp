#ifndef UTILITIES_V2_HPP // macro di guardia: se UTILITIES_V2_HPP non è già stato incluso allora prosegui alla lettura
#define UTILITIES_V2_HPP // macro di definizione: definisce questo file come UTILITIES_V2_HPP, quindi, se il compilatore
                      // l'ha già incluso continua e basta

#include <iostream>
#include <vector>
using namespace std;

namespace utils {
    template<typename T>
    T input() {
        T temp;
        cout << "> ";
        cin >> temp;
        return temp;
    }

    void print(string prompt) {
        cout << prompt << endl;
    }
}


namespace swap {
    template<typename T>
    void swap(T *a, T *b) {
        T temp = *a;
        *a = *b;
        *b = temp;
    }
}

namespace arrays {
    template<typename T>
    vector<T> get_array() {
        utils::print("Inserisci la dimensione dell'array");
        const unsigned int size = utils::input<int>();

        vector<T> array(size);

        cout << "Inserisci i " << size << " valori dell'array" << endl;

        for (T &value : array)
            value = utils::input<T>();

        return array;
    }

    template<typename T>
    int index(const T search, const vector<T>& v) {
        for (size_t i = 0; i < v.size(); i++)
            if (v[i] == search)
                return i;

        return -1;
    }

    template<typename T>
    void reverse(T array[], int size) {
        size_t j;

        for (size_t i = 0; i < (size_t) (size / 2); i++) {
            j = size - i - 1;

            if (i != j)
                swap::swap<T>(array + i, array + j);
        }
    }

    template<typename T>
    void print(T array[], int size) {
        for (size_t i = 0; i < size; i++)
            cout << array[i] << " ";

        cout << endl;
    }
}

namespace math {
    template<typename T>
    T find_max(T num_array[], int size) {
        // is_arithmetic è una struct che contiene la voce value che effettua la verifica su T
        static_assert(is_arithmetic<T>::value, "find_max() accetta solo valori numerici");
        T max = num_array[0];

        for (size_t i = 0; i < size; i++) {
            if (num_array[i] > max)
                max = num_array[i];
        }

        return max;
    }
}

namespace statistics {
    template<typename T>
    double average(const T * const values, const int length) {
        static_assert(is_arithmetic<T>::value, "average() accetta solo valori numerici");
        T average = 0;

        for (size_t i = 0; i < length; i++)
            average += values[i];

        return average / length;
    }

    template<typename T>
    double average(const vector<T>& values) {
        return statistics::average(values.data(), values.size());
    }

    template<typename T>
    int count_if(bool (* condition)(const T value), const T * const values, const int length) {
        int counter = 0;

        for (size_t i = 0; i < length; i++) {
            if (condition(values[i]))
                counter++;
        }

        return counter;
    }

    template<typename T>
    int count_if(bool (*condition)(const T value), const vector<T>& values) {
        return statistics::count_if(condition, values.data(), values.size());
    }
}

#endif // chiude l'ifndef
