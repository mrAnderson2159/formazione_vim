#include <iostream>
#include <string>
#include "../utilities.hpp"

using namespace std;
using namespace utils;

int main() {
    int n;
    string parity;

    print("Inserisci un numero");
    n = int_input();

    parity = n % 2 == 0 ? "pari" : "dispari";

    print("Il numero è " + parity);
}