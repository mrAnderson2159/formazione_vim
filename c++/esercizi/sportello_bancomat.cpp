/**
 * 5. Sportello Bancomat (semplificato)
 *
 * Simula un terminale bancomat che permette all’utente di:
 * - inserire un PIN (qualsiasi numero va bene)
 * - visualizzare un saldo iniziale (es. 1000€)
 * - effettuare prelievi finché il saldo è sufficiente
 * - terminare digitando 0
 *
 * Tutti gli importi devono essere numeri interi.
 */

#include <iostream>
#include "../utilities.hpp"

using namespace std;
using namespace utils;

int main(int argc, char const *argv[]) {
	system("clear");

	print("Inserire il pin");
	const unsigned int pin = int_input();

	if (to_string(pin).length() != 5) {
		print("Pin non valido\n");
		return 1;
	}

	int saldo = 1000;
	int importo;

	while (true) {
		print("Saldo: " + to_string(saldo) + "€");

		print("Vuoi effettuare un prelievo? Inserisci l'importo");
		importo = int_input();

		if (!importo)
			return 0;

		if (saldo - importo >= 0) {
			saldo -= importo;
			print("Erogazione di " + to_string(importo) + "€ in corso...");
		} else {
			print("Credito insufficiente");
		}
		print("Operazione terminata\n");
	}

	return 0;
}
