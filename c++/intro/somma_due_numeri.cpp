#include <iostream>
#include "../utilities.hpp"
using namespace std;

int main() {
    int a, b;
    cout << "Inserisci due numeri interi" << endl;
    a = utils::int_input();
    b = utils::int_input();
    cout << "La somma è " << a + b << endl;
}