#include <iostream>
#include <limits>

using namespace std;

int main(int argc, char const *argv[]) {
	system("clear");

	cout << "Numeric limits for various types:" << endl;
	cout << "int: " << numeric_limits<int>::min() << " to " << numeric_limits<int>::max() << endl;
	cout << "unsigned int: " << numeric_limits<unsigned int>::min() << " to " << numeric_limits<unsigned int>::max() << endl;
	cout << "long: " << numeric_limits<long>::min() << " to " << numeric_limits<long>::max() << endl;
	cout << "unsigned long: " << numeric_limits<unsigned long>::min() << " to " << numeric_limits<unsigned long>::max() << endl;
	cout << "long long: " << numeric_limits<long long>::min() << " to " << numeric_limits<long long>::max() << endl;
	cout << "unsigned long long: " << numeric_limits<unsigned long long>::min() << " to " << numeric_limits<unsigned long long>::max() << endl;
	cout << "float: " << numeric_limits<float>::min() << " to " << numeric_limits<float>::max() << endl;
	cout << endl << "About floating-point types we also have the function lowest():" << endl;
	cout << "float lowest: " << numeric_limits<float>::lowest() << endl;
	cout << "double lowest: " << numeric_limits<double>::lowest() << endl << endl;

}
