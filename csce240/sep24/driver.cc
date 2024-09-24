// Copyright 2024 bhipp
#include<iostream>
using std::cout;
using std::endl;
using std::cin;
#include"arrayfunctions.h"

int main() {
    const int kSize = 10;
    double numbers[kSize] = {};
    Print(numbers, kSize);
    Populate(numbers, kSize);
    Print(numbers, kSize, 6);
    return 0;
}