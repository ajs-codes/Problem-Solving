#include<iostream>
#include<conio.h>

using namespace std;
int main() {
    // integer datatype and its modifiers
    short int si = 3;
    int i = -23;
    unsigned int ui = 34;
    long int li = 388;
    cout << sizeof(si) << "\n";
    cout << sizeof(i) << "\n";
    cout << sizeof(ui) << "\n";
    cout << sizeof(li) << "\n";
    // float and double
    float f = 27.567;
    double d = 6.261246;
    long double ld = 4.3452910E24;
    cout << sizeof(f) << f << "\n";
    cout << sizeof(d) << d << "\n";
    cout << sizeof(ld) << ld << "\n";
    // char data type
    char a = 97,b = 'x',c = 'y';
    cout << a << b << c;
    // boolean character
    bool isLife = true;
    bool areYouLiving = false;
    cout << "\n" << isLife << "\t" << areYouLiving;
    return 0;
}