// Copyright bcalford
#include <iostream>
using std::cout;
using std::cin;

int main() {
    int month1;
    int month2;
    int day1;
    int day2;
    int year1;
    int year2;
    char delim;
    cin >> month1 >> delim >> day1 >> delim >> year1 >> month2 >> delim >> day2 >> delim >> year2;
    cout << month1 << delim << day1 << delim << year1 << month2 << delim << day2 << delim << year2;
}

bool LeapYear(int year) {
    if(year%400 == 0) {
        return true;
    } else if(year%100 == 0) {
        return false;
    } else if(year%4 == 0) {
        return true;
    } else {
        return false;
    }
}

int LastDayOfMonth(int month, int year) {
    if(!(0 < month < 13)) {
        return 0;
    }
    if(!(month == 2)) {
        if(month == 4 || month == 6 || month == 9 || month == 11) {
            return 30;
        } else {
            return 31;
        }
    } else if(year > 0) {
        if(LeapYear(year)) {
            return 29;
        } else {
            return 28;
        }
    } else {
        return 0;
    }
}

bool ValidDate(int month, int day, int year) {
    if(0 < month < 13 && 0 < day < LastDayOfMonth(month, year) && year > 0) {
        return true;
    } else {
        return false;
    }
}

void NextDate(int month, int day, int year) {
    if(!ValidDate(month, day, year)) {
        return;
    }
    day++;
    if(ValidDate(month, day, year)) {
        return;
    } else {
        month++;
        day = 1;
    }
    if(ValidDate(month, day, year)) {
        return;
    } else {
        year++;
        month = 1;
    }
}

void PreviousDate(int month, int day, int year) {
    if(!ValidDate(month, day, year)) {
        return;
    }
    day--;
    if(ValidDate(month, day, year)) {
        return;
    } else {
        month--;
        LastDayOfMonth(month, year);
    }
    if(ValidDate(month, day, year)) {
        return;
    } else {
        year--;
        month = 12;
    }
}