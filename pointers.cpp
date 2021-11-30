#include<iostream>
using namespace std;

int main() {
    int *p = NULL;
    int **q = NULL;
    int a = 10;
    p = &a;
    q = &p;
    *p = 12;
    cout << &p << endl;
    cout << p << endl;
    cout << *p << endl;
    cout << q << endl;
    cout << *q << endl;
    cout << **q << endl;
    cout << a << endl;
}