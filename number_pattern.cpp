#include<iostream>
#include<cstdio>
using namespace std;

void pattern1(int a) {
    cout << "pattern 1" << endl;
    for(int i = 1; i <= a; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%02d ",j);
        }
        cout << endl;
    }
    cout << endl;
}

void pattern2(int a) {
    int count = 1;
    cout << "pattern 2" << endl;
    for(int i = 1; i <= a; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%02d ",count);
            count+=1;
        }
        cout << endl;
    }
    cout << endl;
}

void pattern3(int a) {
    cout << "pattern 3" << endl;
    for(int i = 0; i < a; i++) {
        for(int j = 1; j <= (a - i); j++) {
            printf("%02d ",j);
        }
        cout << endl;
    }
    cout << endl;
}
void pattern4(int a) {
    int count = 1;
    cout << "pattern 4" << endl;
    for(int i = 0; i < a; i++) {
        for(int j = 1; j <= (a - i); j++) {
            printf("%02d ",count);
            count+=1;
        }
        cout << endl;
    }
    cout << endl;
}
void pattern5(int a) {
    cout << "pattern 5" << endl;
    for(int i = 1; i <= a; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%02d ",i);
        }
        cout << endl;
    }
    cout << endl;
}
int main() {
    int input = 0;
    cin >> input;
    pattern1(input);
    pattern2(input);
    pattern3(input);
    pattern4(input);
    pattern5(input);
    return 0;
}