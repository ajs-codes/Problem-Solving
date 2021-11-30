#include<iostream>
#include<math.h>
using namespace std;
int totalPrime(int s,int e) {
    int flag, count = 0;
    for(int i = s; i <= e; i++) {
        if (i == 1 || i == 0)
            continue;
        flag = 1;
        for (int j = 2; j <= i/2; j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag) {
            count+=1;
        }      
    }
    return count;
}
    

int main() {
    int S,E;
    cin >> S >> E;
    cout << totalPrime(S,E);
    return 0;
}