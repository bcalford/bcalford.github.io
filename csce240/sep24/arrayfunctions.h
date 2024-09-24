// Copyright 2024 bhipp
// prototypes for some array functions
#ifndef ARRAY_FUNCTIONS_H_
#define ARRAY_FUNCTIONS_H_

// Bubble sort
void BubbleSort(double[], int);


// function to fill an array of doubles with a bunch of random values
// this function will update the values in the array, so no const
void Populate(double[], int);

// the Print function will not modify the values in the array, so making
// the array parameter const takes credit for that, allowing us to send
// constant or non-constant arrays
void Print(const double[], int size, int field_width = 5);

// function to compute the mean value in an array of doubles
double Average(const double[], int size);

// linear search of array of doubles
int LinearSearch(const double nums[], int size, double search_value);


#endif
