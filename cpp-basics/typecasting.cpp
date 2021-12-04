#include<iostream>
using namespace std;
int main() {
    // implicit type casting
    int a = 3;
    char b = 'c';
    cout << a + b << "\n";
    // explicit type casting
    // char to int and int to char
    // char ch1 = 'x';
    // int x = (int)ch1;
    // cout <<"value of x : "<< x << "\n";
    // cout << "value of x : "<< (char)x << "\n";
    // // float to int 
    // float f = 3.4;
    // int i = (int)f;
    // cout <<"value of a : "<<i<<"\n";
    int x1 = 5;
    char y1 = 'A';
    y1 = x1 + y1;
    cout << y1 << (int)y1;
    return 0;
    
}