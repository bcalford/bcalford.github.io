#ifndef _ASSIGN2_H_  
#define _ASSIGN2_H_

// Copyright bcalford 2024

bool LeapYear(int year);

int LastDayOfMonth(int month, int year);

bool ValidDate(int month, int day, int year);

void NextDate(int& month, int& day, int& year);

void PreviousDate(int& month, int& day, int& year);

#endif