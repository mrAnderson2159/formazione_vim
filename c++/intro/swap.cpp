#include <iostream>
#include "../utilities.hpp"

using namespace std;
using namespace utils;

int main() {
    int a, b;
    print("Inserisci due numeri interi");

    a = int_input();
    b = int_input();

    swap::swap(&a, &b);

    cout << "Dopo lo scambio: " << a << " " << b << endl;
}