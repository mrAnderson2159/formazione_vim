/**
 * 4. Controllo pari/dispari di un array
	Inserisci n numeri in un array, e per ciascuno stampa "pari" o "dispari".
	Usa for, modulo, ternario, print().
 */

#include <iostream>
#include "../utilities.hpp"

using namespace std;
using namespace utils;

int main(int argc, char const *argv[]) {
	system("clear");

	const vector<int> numbers = arrays::get_array();

	for (const int number : numbers) {
		string parity = number % 2 ? "dispari" : "pari";
		print(to_string(number) + "\t" + parity);
	}

	return 0;
}
