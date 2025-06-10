/**
 * 1. Somma dei numeri positivi
		Scrivi un programma che legge n numeri da input e stampa la somma solo dei positivi.
		Usa vector, int_input(), for, cout.
 */

#include <iostream>
#include "../utilities.hpp"

using namespace std;
using namespace utils;
using namespace arrays;

int main(int argc, char const *argv[]) {
	system("clear");

	const vector<int> listaNumeri = get_array();

	unsigned int sum = 0;

	for (const int num : listaNumeri) {
		if (num > 0)
			sum += num;
	}

	cout << "La somma dei numeri positivi è " << sum << endl;

	return 0;
}
