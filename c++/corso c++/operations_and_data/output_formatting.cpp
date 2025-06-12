#include <iostream>
#include <iomanip>
#include <ios>

using namespace std;

void format_table();

int main(int argc, char const *argv[]) {
	system("clear");

	// std::flush


	// std:setw()
	cout << "Unformatted table:" << endl << endl;
	cout << "Name" << " " << "Surname" << " " << "Age" << endl;
	cout << "-------------------------" << endl;
	cout << "Alice" << " " << "Smith" << " " << "30" << endl;
	cout << "Bob" << " " << "Johnson" << " " << "25" << endl;
	cout << "Charlie" << " " << "Brown" << " " << "35" << endl;
	cout << "David" << " " << "Wilson" << " " << "28" << endl;

	cout << endl;

	cout << "Formatted table with setw:" << endl << endl;
	format_table();
	cout << endl;

	cout << "Above table is justified to the right by default." << endl;
	cout << "To justify to the left, use std::left:" << endl << endl;

	// justificatition
	// std::left, std::right, std::internal
	cout << left;
	format_table();
	cout << endl;
	cout << right; // Reset to default right justification


	// boolean formatting
	// std::boolalpha, std::noboolalpha

	// number formatting
	// std::showpos, std::noshowpos

	// base formatting
	// std::dec, std::hex, std::oct
	// std::showbase, std::noshowbase
	// std::uppercase, std::nouppercase

	// floating-point formatting
	// std::fixed, std::scientific, std::defaultfloat
	// std::setprecision()
	// std::showpoint, std::noshowpoint

}

void format_table() {
	int large_col {10};
	int small_col {5};

	cout << setw(large_col) << "Name"
	     << setw(large_col) << "Surname"
	     << setw(small_col) << "Age" << endl;
	cout << "-------------------------" << endl;
	cout << setw(large_col) << "Alice"
	     << setw(large_col) << "Smith"
	     << setw(small_col) << "30" << endl;
	cout << setw(large_col) << "Bob"
	     << setw(large_col) << "Johnson"
	     << setw(small_col) << "25" << endl;
	cout << setw(large_col) << "Charlie"
	     << setw(large_col) << "Brown"
	     << setw(small_col) << "35" << endl;
	cout << setw(large_col) << "David"
	     << setw(large_col) << "Wilson"
	     << setw(small_col) << "28" << endl;
	cout << endl;
}
