// Copyright 2024 bhipp
#include"arrayfunctions.h"
#include<iostream>
using std::cout;
using std::endl;
#include<iomanip>  // for formatting output - setw, setprecision, setiosflags

void Populate(double n[], int size) {
  for ( int i = 0; i < size; i++ )
  n[i] = rand()
}

int LinearSearch(const double nums[], int size, double search_value) {
  int found_position = -1;  // -1 denotes Not Found
  for ( int i = 0; i < size && found_position == -1; ++i )
    if ( nums[i] == search_value )
      found_position = i;
  return found_position;
}


void Print(const double nums[], int size, int field_width) {
  cout << std::setiosflags(std::ios::fixed);  // can use this to fix the decimal
                                           // in real-valued output
  cout << std::setprecision(2);  // number of significant digits if scientific
                                 // notation, number of places after decimal
                                 // if fixed
  for ( int i = 0; i < size; ++i )
    cout << std::setw(field_width) << nums[i];
  cout << endl;
}

double Average(const double nums[], int size) {
  double sum = 0;
  if ( size == 0 )
    return 0;
  for ( int i = 0; i < size; ++i )
    sum += nums[i];
  return sum / size;
}
