/**
 * 7. Gestione di magazzino semplificato
 *
 * Scrivi un programma che:
 * - legge da input `n` prodotti
 * - per ogni prodotto chiede: nome, quantità, prezzo unitario
 * - calcola e stampa:
 *     - il valore totale per ogni prodotto (quantità × prezzo)
 *     - il valore totale dell’intero magazzino
 *     - il nome del prodotto più costoso
 */

#include <iostream>
#include <string>
#include <vector>
#include "../utilities-v2.hpp"

using namespace std;
using namespace utils;

struct product {
	string name;
	int quantity;
	double price;

	double total() const {
		return quantity * price;
	}
};

int main(int argc, char const *argv[]) {
	system("clear");

	print("Digita il numero di prodotti da inserire (fino a 255)");

	const unsigned char product_quantity = input<unsigned short>();

	product* mostExpensive = nullptr;

	vector<product> products(product_quantity);

	unsigned short counter = 1;

	for(product& prd: products) {
		print("Inserisci il nome del prodotto " + to_string(counter));
		prd.name = input<string>();

		print("Inserisci la quantità del prodotto \"" + prd.name + "\"");
		prd.quantity = input<int>();

		print("Inserisci il prezzo del \"" + prd.name + "\"");
		prd.price = input<double>();

		if (mostExpensive == NULL || mostExpensive->price < prd.price)
			mostExpensive = &prd;

		print("");
		counter++;
	}

	double total_sum = 0;

	print("\nTotale per prodotto:");

	for(const product& prd: products) {
		const double total = prd.total();
		total_sum += total;

		cout << prd.name << ": €" << total << endl;
	}

	print("\nTotale nel magazzino: €" + to_string(total_sum));
	print("Il prodotto più costoso è \"" + mostExpensive->name + "\"");

	return 0;
}
