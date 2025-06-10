/**
 * 8. Registro stipendi aziendali
 *
 * Scrivi un programma che:
 * - legge `n` dipendenti, ciascuno con: nome, ore lavorate, paga oraria
 * - calcola e stampa:
 *     - lo stipendio di ciascun dipendente
 *     - lo stipendio medio
 *     - il numero di dipendenti che guadagnano più della media
 *
 * Suggerimenti:
 * - Usa una `struct employee` con un metodo `salary() const`
 * - Usa `statistics::mean()` e `statistics::count_if()`
 */

#include <iostream>
#include <string>
#include <vector>
#include "../utilities-v2.hpp"

using namespace std;
using namespace utils;
using namespace statistics;

struct employee {
	string name;
	unsigned short hours;
	double hourly_rate;

	double salary() const {
		return hours * hourly_rate;
	}
};

struct enterprise {
	vector<employee> employees;

	double average_salary() const {
		vector<double> salaries;

		for (const employee& emp : employees)
			salaries.push_back(emp.salary());

		return average(salaries);
	}

	int employees_above_average() const {
		const double this_mean = average_salary();
		int counter = 0;

		for (const employee& employee: employees) {
			if (employee.salary() > this_mean)
				counter++;
		}

		return counter;
	}
};

int main(int argc, char const *argv[]) {
	system("clear");

	print("Inserisci il numero di dipendenti");

	const int number_employees = input<int>();
	int i = 0;

	enterprise enterprise;
	enterprise.employees.resize(number_employees); // Settiamo la dimensione dell'array

	for(employee& employee: enterprise.employees) {
		print("Inserimento dei dati del dipendente " + to_string(i + 1) + "\n");
		print("Nome");
		employee.name = input<string>();

		print("Ore lavorate");
		employee.hours = input<unsigned short>();

		print("Paga oraria");
		employee.hourly_rate = input<double>();
		i++;
	}

	print("Calcolo dello stipendio di tutti i dipendenti...");

	for(const employee& employee: enterprise.employees) {
		cout << "Stipendio di " << employee.name << ": € " << employee.salary() << endl;
	}

	cout << "\nStipendio medio: € " << enterprise.average_salary() << endl;
	cout << enterprise.employees_above_average() << " dipendenti guadagnano sopra la media";

	return 0;
}
