#include<iostream>
using namespace std;

int main() {
    int size;
    cin >> size;
    // method 1 static allocation in stack memory
    int array[size];
    for(int index = 0;index < size;index++) {
        cin >> array[index];
    }
    for(int index = 0;index < size;index++) {
        cout << array[index] << endl;
    }
    // method 2 dynamic allocation in heap memory
    int *p_array = new int [size];
    for(int index = 0;index < size;index++) {
        cin >> p_array[index];
    }
    for(int index = 0;index < size;index++) {
        cout << p_array[index];
    }
}