#include<iostream>
#include<string.h>
using namespace std;
int main() {
    // cin-cout method
    int a,b;
    cin >> a >> b;
    cout << a+b << " is the addition of two numbers" << endl;
    // getline method (only for strings)
    string s;
    getline(cin ,s);
    cout << s << endl;
    return 0;
}