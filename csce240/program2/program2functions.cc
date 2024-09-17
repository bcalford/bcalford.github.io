// Copyright bcalford 2024
#include"program2functions.h"


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

void NextDate(int& month, int& day, int& year) {
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

void PreviousDate(int& month, int& day, int& year) {
    if(!ValidDate(month, day, year)) {
        return;
    }
    day--;
    if(ValidDate(month, day, year)) {
        return;
    } else {
        month--;
        day = LastDayOfMonth(month, year);
    }
    if(ValidDate(month, day, year)) {
        return;
    } else {
        year--;
        month = 12;
    }
}