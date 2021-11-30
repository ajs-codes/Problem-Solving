#include <iostream>
#include <conio.h>
using namespace std;
int main(int args,char* argv[]) {
    cout << "you have entered " << args - 1 << " arguments." << "\n";
    for(int i = 1; i < args; i++) {
        cout << "argv["<<i<<"] = "<<argv[i]<< "\n";
    }
    getch();
    return 0;
}