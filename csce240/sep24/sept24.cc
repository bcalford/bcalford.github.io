// Copyright 2024 bhipp
#include<iostream>
using std::cout;
using std::endl;
using std::cin;
#include"arrayfunctions.h"

int main() {
  // good idea to make a constant variable to use throughout so that any
  // modifications to the array size can be made in one place
  const int kSize = 5;
  double my_numbers[kSize] = { 3.234123, 4, 7.094 };
  cout << my_numbers << endl;
  cout << my_numbers + 1 << endl;
  Print(my_numbers, kSize);

  cout << "Enter " << kSize << " real numbers: ";
  for ( int i = 0; i < kSize; ++i )
    cin >> my_numbers[i];

  Print(my_numbers, kSize);

  const double kGPA[8] = { 0, 1, 1.5, 2, 2.5, 3, 3.5, 4 };
  // kGPA can only be sent to functions that guarantee they won't change
  // the values in the array
  Print(kGPA, 8);

  cout << "average = " << Average(kGPA, 8) << endl;

  double lookin4;
  cout << "What are you looking for? ";
  cin >> lookin4;
  cout << LinearSearch(kGPA, 8, lookin4) << endl;
  return 0;
}

