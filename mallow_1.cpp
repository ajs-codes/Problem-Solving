#include <iostream>
#include <cstdio>

using namespace std;

struct Hotel
{
    int hotelId ;
    int min ;
    int minCost;
    int inc;
    int incCost;
};
struct Customer
{
   int hour;
   int budget;
   int comPer;
   int premiumDis;
   string pn;
   int taxper;
};

int main()
{
    int no_hotels;
    int calcHour;
    int calcAmt;
    int selectedHotel;
    cin >> no_hotels ;
    struct Hotel c[no_hotels];
    for(int i = 0 ; i < no_hotels ; i++){
      cin >> c[i].hotelId;
      cin >> c[i].min;
      cin >> c[i].minCost;
      cin >> c[i].inc;
      cin >> c[i].incCost;  
  }
    struct Customer cI;
    cin >> cI.hour;
    cin >> cI.budget;
    cin >> cI.comPer;
    cin >> cI.premiumDis;
    cin >> cI.pn;
    cin >> cI.taxper;
    int times = 0;
    for(struct Hotel i : c){
     calcHour = i.min;
     while(calcHour < cI.hour){
         calcHour += i.inc;
         times++;
         if(calcHour == cI.hour) {
             selectedHotel = i.hotelId;
             break;
         }
         if(calcHour > cI.hour) {
            calcHour = 0;
            times = 0;
            break;
         }
     }
 }  
    cout << selectedHotel;
    printf("%d",calcHour);
    return 0;
}