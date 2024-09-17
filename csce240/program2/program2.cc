// Copyright bcalford 2024
#include <iostream>
using std::cout;
using std::endl;
using std::cin;
#include "program2functions.h"

int main() {
    char throwaway;
    int month1;
    int day1;
    int year1;
    int month2;
    int day2;
    int year2;
    cout << "Please input the first date in the format mm/dd/yyyy" << endl;
    cin >> month1 >> throwaway >> day1 >> throwaway >> year1;
    cout << "Please input the second date in the format mm/dd/yyyy" << endl;
    cin >> month2 >> throwaway >> day2 >> throwaway >> year2;
    
    if(ValidDate(month1, day1, year1) && ValidDate(month2, day2, year2)) {
        int difference;
        int month1a = month1;
        int day1a = day1;
        int year1a = year1;
        int month1b = month1;
        int day1b = day1;
        int year1b = year1;
        while(!(month1a == month2 && day1a == day2 && year1a == year2) && !(month1b == month2 && day1b == day2 && year1b == year2)) {
            NextDate(month1a, day1a, year1a);
            PreviousDate(month1b, day1b, year1b);
            difference++;
        }
        if(month1a == month2) {
            cout << month1 << throwaway << day1 << throwaway << year1 << " is " << difference << " days before " << month2 << throwaway << day2 << throwaway << year2;
        } else {
            cout << month1 << throwaway << day1 << throwaway << year1 << " is " << difference << " days after " << month2 << throwaway << day2 << throwaway << year2;
        }
        
    } else if(!ValidDate(month1, day1, year1)) {
        cout << month1 << throwaway << day1 << throwaway << year1 << " is not a valid date." << endl;
    } else {
        cout << month2 << throwaway << day2 << throwaway << year2 << " is not a valid date." << endl;
    }

    return 1;
}