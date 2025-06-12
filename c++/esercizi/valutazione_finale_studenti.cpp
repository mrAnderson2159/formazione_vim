/**
 * 10. Valutazione finale studenti
 *
 * Scrivi un programma che:
 * - legge `n` studenti
 * - per ogni studente chiede: nome, 3 voti interi da 0 a 100
 * - calcola:
 *     - la media dei voti per ogni studente
 *     - la media generale di tutti i voti
 *     - quanti studenti sono promossi (media ≥ 60)
 *     - chi ha la media più alta (nome e valore)
 *
 * Suggerimenti:
 * - Usa una `struct student` con nome, 3 voti, e metodo `media()`
 * - Usa `statistics::average()`, `count_if()` e un ciclo per il massimo
 */

#include <iostream>
#include <string>
#include <vector>
#include "../utilities-v2.hpp"

using namespace std;
using namespace utils;
using namespace statistics;
using namespace math;

struct Student {
	string name;
	vector<unsigned short> notes;

	double average() const {
		return sum(notes) / notes.size();
	}
};

bool is_average_above_sixty(const Student& student) {
	return student.average() >= 60;
}

struct School {
	vector<Student> students;

	double average() const {
		double acc = 0;
		int den = 0;

		for(const Student& student: students) {
			acc += sum(student.notes);
			den += student.notes.size();
		}

		return acc / den;
	}

	int passed_students_count() const {
		return count_if(is_average_above_sixty, students);
	}

	const Student* best_student() const {
		if (students.empty())
			return nullptr;

		const Student* best = &students[0];

		for (const Student& s : students)
			if (s.average() > best->average())
				best = &s;

		return best;
	}
};

int main(int argc, char const *argv[]) {
	system("clear");

	School school;
	int i = 0;

	// Acquisizione dati
	print("Inserisci il numero di studenti");
	const unsigned short num_studends = input<unsigned short>();

	school.students.resize(num_studends);


	for (Student& student: school.students) {
		cout << "Dati dello studente " << i+1 << endl << endl;

		print("Nome");
		student.name = input<string>();

		for (size_t j = 0; j < 3; j++) {
			cout << "Voto " << j+1 << " (0-100)" << endl;
			student.notes.push_back(input<unsigned short>());
		}

		print();

		i++;
	}


	// Media per studente
	print("Media per ogni studente");
	print("Nome\tMedia");
	for (Student& student: school.students) {
		cout << student.name << "\t" << student.average() << endl;
	}

	// Media generale
	cout << "La media generale per tutti i voti della scuola è " << school.average() << endl;

	// Studenti passati
	cout << "Ci sono " << school.passed_students_count() << " studenti con media maggiore o uguale a 60" << endl;

	// Studente con media più alta
	const Student* best_student = school.best_student();

	cout << "Lo studente con media più alta è " << best_student->name << " con un punteggio di " << best_student->average() << endl;

	return 0;
}
