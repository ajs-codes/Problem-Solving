#include<iostream>
using namespace std;

void pattern1(int a) {
    // star pattern 1
    cout << "pattern 1" << endl;
    for(int i = 1; i <= a; i++) {
        for(int j = 1; j <= a; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    cout << endl;
}
void pattern2(int a) {
    cout << "pattern 2" << endl;
    for(int i = 1; i <= a; i++) {
        for(int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    cout << endl;
}
void pattern3(int a) {
    cout << "pattern 3" << endl;
    for(int i = 0; i < a; i++) {
        for(int j = 1; j <= (a - i); j++) {
            cout << "* ";
        }
        cout << endl;
    }
    cout << endl;
}
void pattern4(int a) {
    cout << "pattern 4" << endl;
    for(int i = 1; i < (a*2); i++) {
        if(i <= ((a*2)/2)) {
          for(int j = 1; j <= i; j++) {
            cout << "* ";
        } 
        } else {
            for(int j = 1; j <= a-(i-a); j++) {
                cout << "* ";
            } 
        }
        cout << endl;
    }
    cout << endl;
}

int main() {
    int input;
    cin >> input;
    cout << endl;
    pattern1(input);
    pattern2(input);
    pattern3(input);
    pattern4(input);
    return 0;
}