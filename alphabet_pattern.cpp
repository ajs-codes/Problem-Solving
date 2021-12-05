#include<iostream>
#include<cstdio>
using namespace std;

void pattern1(int a) {
    int alpha = 65;
    cout << "pattern 1" << endl;
    for(int i = 1;i <= a;i++) {
        for(int j = 0;j < i;j++) {
            printf("%c ",alpha+j);
        }
        cout << endl;
    }
    cout << endl;
}

void pattern2(int a) {
    int alpha = 65;
    cout << "pattern 2" << endl;
    for(int i = 1;i <= a;i++) {
        for(int j = 0;j < i;j++) {
            printf("%c ",alpha);
            alpha+=1;
        }
        cout << endl;
    }
    cout << endl;
}

void pattern3(int a) {
    int alpha = 65;
    cout << "pattern 3" << endl;
    for(int i = 0;i < a;i++) {
        for(int j = 0;j < (a-i);j++) {
            printf("%c ",alpha+j);
        }
        cout << endl;
    }
    cout << endl;
}
int main() {
    int input=0;
    cin >> input;
    pattern1(input);
    pattern2(input);
    pattern3(input);
    return 0;
}