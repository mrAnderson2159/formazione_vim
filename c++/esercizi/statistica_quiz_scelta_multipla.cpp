/**
 * 6. Statistiche di un quiz a scelta multipla
 *
 * Crea un programma che:
 * - chiede il numero di studenti
 * - per ogni studente chiede il punteggio (intero da 0 a 100)
 * - calcola:
 *     - la media
 *     - il numero di insufficienti (< 60)
 *     - la percentuale di studenti sopra 90
 */

#include <iostream>
#include "../utilities-v2.hpp"

using namespace std;
using namespace utils;
using namespace statistics;

bool is_under_60(const int note) {
	return note < 60;
}

bool is_above_90(const int note) {
	return note > 90;
}

int main(int argc, char const *argv[]) {
	system("clear");

	print("Inserisci il numero di studenti (1-255)");
	const unsigned char studenti = (char) input<int>();

	if (!studenti) {
		print("Nessuno studente inserito");
		return 1;
	}

	vector<int> notes(studenti);

	print("Inserisci i voti di ciascuno studente");

	for (int &note: notes) {
		note = input<int>();
	}

	cout << "La media dei voti è " << average(notes) << endl;
	cout << "Ci sono state " << count_if(is_under_60, notes) << " insufficienze" << endl;
	cout << "Mentre il " << ( (double) count_if(is_above_90, notes)) / studenti * 100 << "% degli studenti è sopra il 90" << endl;

	return 0;
}
