/**
  * 3. Stampa al contrario una lista
		Crea un array dinamico di n interi, leggilo da input e stampalo al contrario.
		Usa malloc, reverse, arrays::print.
 */


#include <iostream>
#include "../utilities.hpp"

using namespace std;

int main(int argc, char const *argv[]) {
	system("clear");

	utils::print("Inserisci la grandezza dell'array di interi da invertire");

	const unsigned int array_length = utils::int_input();

	int* const toBeReversed = (int*) malloc(sizeof(int) * array_length);

	cout << "Inserisci i " << array_length << " valori da stampare al contrario" << endl;

	for (size_t i = 0; i < array_length; i++)
		*(toBeReversed + i) = utils::int_input();

	arrays::reverse(toBeReversed, array_length);

	utils::print("I valori dell'array invertito sono");
	arrays::print(toBeReversed, array_length);

	free(toBeReversed);
	return 0;
}
