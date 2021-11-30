#include<iostream>
using namespace std;

#define NAME "sharan"
#define GREET(A)("Hello " A)
bool global = true;
int main() {
    cout << GREET(NAME) << "\n";
    cout << global;
    return 0;
}