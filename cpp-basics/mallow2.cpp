// 2 nd round problem 1
#include <iostream>
using namespace std;

struct Slot_details {
    int date;
    int slot_id;
    int no_of_slots;
};

struct Student_details {
    int stu_id;
    int cutoff;
    int age;
    int hsc;
    int sslc;
};

int main() {
    int no_slots;
    cin >> no_slots;
    struct Slot_details a[no_slots];
    for(int i = 0; i < no_slots; i++) {
        cin >> a[i].date;
        cin >> a[i].slot_id;
        cin >> a[i].no_of_slots;
    }
    int student_count;
    cin >> student_count;
    struct Student_details b[student_count];
    for(int i = 0; i < student_count; i++) {
        cin >> b[i].stu_id;
        cin >> b[i].cutoff;
        cin >> b[i].age;
        cin >> b[i].hsc;
        cin >> b[i].sslc; 
    }
    cout << a[0].date << "|" << b[0].stu_id << "|" << a[0].slot_id;
    
    return 0;
}